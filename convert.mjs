import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const parsed = path.parse(fullPath);
        const newPath = path.join(parsed.dir, `${parsed.name}.webp`);
        console.log(`Converting ${fullPath} to ${newPath}`);
        
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(newPath);
          
          console.log(`Deleting ${fullPath}`);
          fs.unlinkSync(fullPath);
        } catch (error) {
          console.error(`Failed to process ${fullPath}:`, error);
        }
      }
    }
  }
}

async function run() {
  console.log('Starting conversion...');
  await processDirectory(publicDir);
  console.log('Conversion completed.');
}

run();
