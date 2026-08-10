import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'src/components/ResultsSection.tsx',
  'src/components/Navbar.tsx',
  'src/components/HeroSection.tsx',
  'src/components/Footer.tsx',
  'src/components/GallerySection.tsx',
  'src/components/FacultySection.tsx'
];

for (const file of filesToUpdate) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace all .png, .jpg, .jpeg with .webp
    const newContent = content.replace(/\.(png|jpe?g)/gi, '.webp');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log(`Updated ${file}`);
    }
  } else {
    console.warn(`File not found: ${file}`);
  }
}
