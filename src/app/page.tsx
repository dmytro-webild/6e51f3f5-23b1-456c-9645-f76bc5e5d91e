"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Sparkles,
  Star,
  Zap,
  Heart,
  Mail,
  Home,
  ShoppingBag,
  Settings,
  Package,
  Truck,
  CheckCircle,
  ShoppingCart,
  Crown,
  Diamond,
} from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          background={{ variant: "radial-gradient" }}
          tag="New Arrivals"
          tagIcon={Sparkles}
          title="Welcome to ShopHub - Your Ultimate Online Store"
          description="Discover thousands of premium products with secure checkout and fast delivery. Shop with confidence."
          buttons={[
            { text: "Start Shopping", href: "/shop" },
            { text: "Learn More", href: "#about" },
          ]}
          dashboard={{
            title: "Live Sales Dashboard",
            logoIcon: ShoppingCart,
            imageSrc: "http://img.b2bpic.net/free-photo/astonished-impressed-excited-redhead-female-yellow-sweater-introduce-new-app-showing-smartpho_1258-126427.jpg",
            searchPlaceholder: "Search products...",
            buttons: [
              { text: "View Inventory", href: "#" },
              { text: "Export Report", href: "#" },
            ],
            sidebarItems: [
              { icon: Home, active: true },
              { icon: ShoppingBag, active: false },
              { icon: Settings, active: false },
            ],
            stats: [
              {
                title: "Total Orders",
                values: [2840, 3150, 3890],
                description: "Orders this month.",
              },
              {
                title: "Revenue",
                values: [45200, 62500, 78300],
                valuePrefix: "$",
                description: "Sales revenue.",
              },
              {
                title: "Customers",
                values: [1240, 1680, 2150],
                description: "Active customers.",
              },
            ],
            chartTitle: "Monthly Sales Trend",
            chartData: [
              { value: 45 },
              { value: 62 },
              { value: 58 },
              { value: 78 },
              { value: 85 },
            ],
            listTitle: "Recent Orders",
            listItems: [
              {
                icon: Package,
                title: "$299.99 - Premium Headphones",
                status: "Shipped",
              },
              {
                icon: Truck,
                title: "$149.99 - Smart Watch",
                status: "In Transit",
              },
              {
                icon: CheckCircle,
                title: "$89.99 - Phone Case",
                status: "Delivered",
              },
            ],
          }}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Products"
          description="Browse our best-selling items with exceptional customer ratings and reviews."
          tag="Best Sellers"
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
              imageSrc: "http://img.b2bpic.net/free-vector/cyber-monday-composition-with-flat-design_23-2147943559.jpg?_wi=1",
              imageAlt: "Premium wireless headphones",
            },
            {
              id: "2",
              brand: "StyleGear",
              name: "Classic Cotton T-Shirt",
              price: "$49.99",
              rating: 4,
              reviewCount: "1.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AeASECDCXxQRNcmkfWpspNsLWo/uploaded-1772943327294-cn69auyy.png",
              imageAlt: "Classic cotton t-shirt",
            },
            {
              id: "3",
              brand: "LuxeHome",
              name: "Ergonomic Office Chair",
              price: "$349.99",
              rating: 5,
              reviewCount: "945",
              imageSrc: "http://img.b2bpic.net/free-photo/women-happily-shopping-buying-consumer-products-customer-day_23-2151623457.jpg?_wi=1",
              imageAlt: "Ergonomic office chair",
            },
          ]}
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

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="What Our Customers Say"
          description="Join thousands of satisfied shoppers who trust ShopHub for their online shopping needs."
          tag="Customer Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "Digital Agency Co",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-content-pretty-businesswoman-glasses_1262-1740.jpg?_wi=1",
              imageAlt: "Sarah Johnson",
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Product Designer",
              company: "Tech Innovations Inc",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-lawyer-portrait_23-2151202433.jpg?_wi=1",
              imageAlt: "Michael Chen",
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Business Owner",
              company: "Retail Excellence",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280717.jpg?_wi=1",
              imageAlt: "Emily Rodriguez",
            },
            {
              id: "4",
              name: "David Williams",
              role: "CEO",
              company: "Global Enterprises",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5359.jpg",
              imageAlt: "David Williams",
            },
          ]}
          kpiItems={[
            { value: "180K+", label: "Happy Customers" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "2M+", label: "Orders Processed" },
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Partnered with the world's largest e-commerce and payment platforms."
          tag="Partners"
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

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated with Our Latest Deals"
          description="Subscribe to our newsletter and get exclusive discounts, early access to sales, and insider tips on the best products."
          tagIcon={Mail}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-vector/modern-business-flyer-template-with-flat-design_23-2147913203.jpg?_wi=1"
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
          imageSrc="http://img.b2bpic.net/free-photo/abstract-blur-shopping-mall-interior_1203-8287.jpg?_wi=1"
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