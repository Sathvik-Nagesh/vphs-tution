import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ResultsSection from "@/components/ResultsSection";
import AdmissionsBanner from "@/components/AdmissionsBanner";
import FacultySection from "@/components/FacultySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquiryForm from "@/components/EnquiryForm";
import BatchTimings from "@/components/BatchTimings";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const MemoizedNavbar = React.memo(Navbar);
const MemoizedHeroSection = React.memo(HeroSection);
const MemoizedStatsSection = React.memo(StatsSection);
const MemoizedWhyChooseUs = React.memo(WhyChooseUs);
const MemoizedCoursesSection = React.memo(CoursesSection);
const MemoizedResultsSection = React.memo(ResultsSection);
const MemoizedAdmissionsBanner = React.memo(AdmissionsBanner);
const MemoizedFacultySection = React.memo(FacultySection);
const MemoizedTestimonialsSection = React.memo(TestimonialsSection);
const MemoizedEnquiryForm = React.memo(EnquiryForm);
const MemoizedBatchTimings = React.memo(BatchTimings);
const MemoizedContactSection = React.memo(ContactSection);
const MemoizedFooter = React.memo(Footer);
const MemoizedWhatsAppButton = React.memo(WhatsAppButton);

const Index = () => (
  <>
    <MemoizedNavbar />
    <MemoizedHeroSection />
    <MemoizedStatsSection />
    <MemoizedWhyChooseUs />
    <MemoizedCoursesSection />
    <MemoizedResultsSection />
    <MemoizedAdmissionsBanner />
    <MemoizedFacultySection />
    <MemoizedTestimonialsSection />
    <MemoizedEnquiryForm />
    <MemoizedBatchTimings />
    <MemoizedContactSection />
    <MemoizedFooter />
    <MemoizedWhatsAppButton />
  </>
);

export default React.memo(Index);
