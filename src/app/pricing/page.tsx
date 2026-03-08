"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { Zap, ShoppingCart, Crown, Diamond, Sparkles } from "lucide-react";

export default function PricingPage() {
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

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Flexible Pricing Plans"
          description="Choose the perfect plan for your business needs. All plans include free shipping on orders over $50."
          tag="Save More"
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

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Partnered with the world's largest e-commerce and payment platforms."
          tag="Partners"
          tagIcon={Sparkles}
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Amazon",
            "eBay",
            "Shopify",
            "WooCommerce",
            "Stripe",
            "PayPal",
            "Square",
          ]}
          logos={[
            "http://img.b2bpic.net/free-photo/computer-mouse-paper-bags-blue-background-top-view_169016-41289.jpg",
            "http://img.b2bpic.net/free-vector/set-e-commerce-logo-templates_52683-61451.jpg",
            "http://img.b2bpic.net/free-vector/health-store-logo-design_23-2148472971.jpg",
            "http://img.b2bpic.net/free-vector/gradient-instagram-shop-logo-template_23-2149709635.jpg",
            "http://img.b2bpic.net/free-photo/excited-lady-red-dress-showing-plastic-credit-card-smartphone-screen-smiling-amazed-standing_1258-146662.jpg",
            "http://img.b2bpic.net/free-photo/young-man-working-with-laptop-man-s-hands-notebook-computer-business-person-casual-clothes-street_158538-12887.jpg",
            "http://img.b2bpic.net/free-vector/sale-promotion-banners-social-media-collection_52683-16989.jpg",
          ]}
          speed={40}
          showCard={true}
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