"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Shop", id: "/" },
    { name: "About", id: "#about" },
    { name: "Pricing", id: "#pricing" },
    { name: "Services", id: "/services" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Shop",      items: [
        { label: "Products", href: "/" },
        { label: "Categories", href: "/" },
        { label: "Best Sellers", href: "/" },
        { label: "New Arrivals", href: "/" },
      ],
    },
    {
      title: "Company",      items: [
        { label: "About Us", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Support",      items: [
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "#" },
        { label: "Shipping Info", href: "#" },
        { label: "Returns", href: "#" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="large"
      background="noiseDiagonalGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={navItems}
          brandName="ShopHub"
          bottomLeftText="Trusted E-Commerce"
          bottomRightText="support@shophub.com"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated with Our Latest Deals"
          description="Subscribe to our newsletter and get exclusive discounts, early access to sales, and insider tips on the best products."
          tagIcon={Mail}
          background={{
            variant: "sparkles-gradient"}}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-vector/modern-business-flyer-template-with-flat-design_23-2147913203.jpg"
          imageAlt="Newsletter signup"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/abstract-blur-shopping-mall-interior_1203-8287.jpg"
          imageAlt="ShopHub retail environment"
          logoText="ShopHub"
          copyrightText="© 2025 ShopHub. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}
