"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { Heart, Star, Sparkles } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Shop", id: "/" },
    { name: "About", id: "/about" },
    { name: "Pricing", id: "/pricing" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Shop",
      items: [
        { label: "Products", href: "/" },
        { label: "Categories", href: "/" },
        { label: "Best Sellers", href: "/" },
        { label: "New Arrivals", href: "/" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Pricing", href: "/pricing" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Support",
      items: [
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
          navItems={navItems.map((item) => ({
            name: item.name,
            id: item.id,
          }))}
          brandName="ShopHub"
          bottomLeftText="Trusted E-Commerce"
          bottomRightText="support@shophub.com"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Best-Selling Collection"
          description="Discover our most popular items trusted by thousands of customers worldwide."
          tag="Customer Favorites"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              brand: "TechPro",
              name: "Premium Wireless Headphones",
              price: "$199.99",
              rating: 5,
              reviewCount: "2.3k",
              imageSrc:
                "http://img.b2bpic.net/free-vector/cyber-monday-composition-with-flat-design_23-2147943559.jpg",
              imageAlt: "Premium wireless headphones",
            },
            {
              id: "2",
              brand: "StyleGear",
              name: "Classic Cotton T-Shirt",
              price: "$49.99",
              rating: 4,
              reviewCount: "1.8k",
              imageSrc:
                "http://img.b2bpic.net/free-photo/adult-reusing-materials-creative-ways_23-2149409413.jpg",
              imageAlt: "Classic cotton t-shirt",
            },
            {
              id: "3",
              brand: "LuxeHome",
              name: "Ergonomic Office Chair",
              price: "$349.99",
              rating: 5,
              reviewCount: "945",
              imageSrc:
                "http://img.b2bpic.net/free-photo/women-happily-shopping-buying-consumer-products-customer-day_23-2151623457.jpg",
              imageAlt: "Ergonomic office chair",
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "Digital Agency Co",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/closeup-content-pretty-businesswoman-glasses_1262-1740.jpg",
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Product Designer",
              company: "Tech Innovations Inc",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/front-view-lawyer-portrait_23-2151202433.jpg",
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Business Owner",
              company: "Retail Excellence",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280717.jpg",
            },
          ]}
          kpiItems={[
            { value: "180K+", label: "Happy Customers" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "2M+", label: "Orders Processed" },
          ]}
          animationType="slide-up"
          title="What Our Customers Say"
          description="Join thousands of satisfied shoppers who trust ShopHub for their online shopping needs."
          tag="Customer Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/abstract-blur-shopping-mall-interior_1203-8287.jpg"
          imageAlt="ShopHub retail environment"
          columns={footerColumns}
          logoText="ShopHub"
          copyrightText="© 2025 ShopHub. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}