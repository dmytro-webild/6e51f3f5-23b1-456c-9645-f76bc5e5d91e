"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Star,
  Zap,
  Mail,
  ShoppingCart,
  Crown,
  Diamond,
} from "lucide-react";

export default function ShopPage() {
  const navigationItems = [
    { name: "Shop", id: "products" },
    { name: "About", id: "about" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
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
          navItems={navigationItems}
          brandName="ShopHub"
          bottomLeftText="Trusted E-Commerce"
          bottomRightText="support@shophub.com"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Complete Product Catalog"
          description="Explore our full selection of premium products across all categories with unbeatable prices and quality."
          tag="All Products"
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
              imageSrc: "http://img.b2bpic.net/free-vector/cyber-monday-composition-with-flat-design_23-2147943559.jpg?_wi=2",
              imageAlt: "Premium wireless headphones",
            },
            {
              id: "2",
              brand: "StyleGear",
              name: "Classic Cotton T-Shirt",
              price: "$49.99",
              rating: 4,
              reviewCount: "1.8k",
              imageSrc: "http://img.b2bpic.net/free-photo/adult-reusing-materials-creative-ways_23-2149409413.jpg?_wi=2",
              imageAlt: "Classic cotton t-shirt",
            },
            {
              id: "3",
              brand: "LuxeHome",
              name: "Ergonomic Office Chair",
              price: "$349.99",
              rating: 5,
              reviewCount: "945",
              imageSrc: "http://img.b2bpic.net/free-photo/women-happily-shopping-buying-consumer-products-customer-day_23-2151623457.jpg?_wi=2",
              imageAlt: "Ergonomic office chair",
            },
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Membership Plans"
          description="Join our membership program for exclusive benefits, faster shipping, and special discounts on every purchase."
          tag="Member Benefits"
          tagIcon={Zap}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Starter",
              badgeIcon: ShoppingCart,
              price: "$4.99",
              subtitle: "Perfect for individual shoppers",
              buttons: [
                { text: "Get Started", href: "#" },
                { text: "Learn More", href: "#" },
              ],
              features: [
                "Free standard shipping",
                "30-day returns",
                "Email support",
                "Exclusive member discounts",
              ],
            },
            {
              id: "pro",
              badge: "Professional",
              badgeIcon: Crown,
              price: "$9.99/mo",
              subtitle: "Best for frequent shoppers",
              buttons: [
                { text: "Get Started", href: "#" },
                { text: "Learn More", href: "#" },
              ],
              features: [
                "Free express shipping",
                "60-day returns",
                "Priority support",
                "15% off all purchases",
                "Early access to sales",
              ],
            },
            {
              id: "enterprise",
              badge: "Premium",
              badgeIcon: Diamond,
              price: "$19.99/mo",
              subtitle: "Ultimate shopping experience",
              buttons: [
                { text: "Get Started", href: "#" },
                { text: "Learn More", href: "#" },
              ],
              features: [
                "Free overnight shipping",
                "90-day returns",
                "24/7 VIP support",
                "25% off all purchases",
                "Exclusive products",
                "Free gifts and bonuses",
              ],
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Support"
          title="Questions About Your Order?"
          description="Have questions about our products or your order? Subscribe to our support newsletter for helpful tips, product recommendations, and order updates."
          tagIcon={Mail}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-vector/modern-business-flyer-template-with-flat-design_23-2147913203.jpg?_wi=2"
          imageAlt="Customer support"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/abstract-blur-shopping-mall-interior_1203-8287.jpg?_wi=2"
          imageAlt="ShopHub retail environment"
          logoText="ShopHub"
          copyrightText="© 2025 ShopHub. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "Products", href: "/shop" },
                { label: "Categories", href: "/shop" },
                { label: "Best Sellers", href: "/shop" },
                { label: "New Arrivals", href: "/shop" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" },
              ],
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}