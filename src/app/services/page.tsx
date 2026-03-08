"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Sparkles, ShoppingCart, Home, ShoppingBag, Settings, Package, Truck, CheckCircle } from "lucide-react";

export default function ServicesPage() {
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
          bottomLeftText="Premium Services"
          bottomRightText="support@shophub.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          background={{ variant: "radial-gradient" }}
          tag="Our Services"
          tagIcon={Sparkles}
          title="Professional Services Designed for Your Success"
          description="Comprehensive solutions tailored to help your business grow and thrive. From consulting to support, we've got you covered."
          buttons={[
            { text: "Get Started", href: "#" },
            { text: "Learn More", href: "#" },
          ]}
          dashboard={{
            title: "Service Management Dashboard",            logoIcon: ShoppingCart,
            imageSrc: "http://img.b2bpic.net/free-photo/astonished-impressed-excited-redhead-female-yellow-sweater-introduce-new-app-showing-smartpho_1258-126427.jpg",            searchPlaceholder: "Search services...",            buttons: [
              { text: "View All Services", href: "#" },
              { text: "Book a Consultation", href: "#" },
            ],
            sidebarItems: [
              { icon: Home, active: true },
              { icon: ShoppingBag, active: false },
              { icon: Settings, active: false },
            ],
            stats: [
              {
                title: "Services Offered",                values: [15, 18, 22],
                description: "Active services available."},
              {
                title: "Client Satisfaction",                values: [95, 97, 99],
                valuePrefix: "%",                description: "Customer satisfaction rate."},
              {
                title: "Projects Completed",                values: [500, 750, 1200],
                description: "Successful projects delivered."},
            ],
            chartTitle: "Service Growth Trend",            chartData: [
              { value: 40 },
              { value: 65 },
              { value: 55 },
              { value: 80 },
              { value: 90 },
            ],
            listTitle: "Recent Engagements",            listItems: [
              {
                icon: Package,
                title: "Consulting - Enterprise Solutions",                status: "Active"},
              {
                icon: Truck,
                title: "Implementation - Cloud Migration",                status: "In Progress"},
              {
                icon: CheckCircle,
                title: "Training - Team Development",                status: "Completed"},
            ],
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/abstract-blur-shopping-mall-interior_1203-8287.jpg"
          imageAlt="ShopHub services environment"
          logoText="ShopHub"
          copyrightText="© 2025 ShopHub. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}
