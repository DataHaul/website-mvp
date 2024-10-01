"use client";
import Image from "next/image";
import Navbar from "./components/NavBar";
import HeroSection from "./components/Hero";
import { Container } from "@mui/material";
import FeaturesSection from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <FeaturesSection/>
      <Footer />
    </>
  );
}
