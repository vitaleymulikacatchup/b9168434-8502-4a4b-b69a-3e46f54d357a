"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [
  { id: "hero-bg", url: "https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Bright and fresh lemons with mint leaves on a pastel background, perfect for culinary themes." },
  { id: "about-image", url: "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A worker operates a grinder cutting metal, creating a vibrant display of sparks in an industrial setting." },
  { id: "contact-image", url: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Garant Snus"
          buttonText="Get Products"
          buttonVariant="slide-background"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-powder-blue">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Garant Snus"
            description="Premium Quality Snus Delivered to Your Doorstep"
            imageSrc="https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Shop Now", href: "products" },
              { text: "Learn More", href: "about" }
            ]}
            className="bg-powder-blue"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
            buttonClassName="text-white"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-powder-blue">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Garant Snus is committed to providing the finest snus products"
            buttons={[{ text: "Learn More", href: "about" }]}
            className="bg-powder-blue"
            titleClassName="text-gray-800"
            buttonClassName="text-white"
          />
        </div>
      </div>
      <div id="products" data-section="products" className="scroll-mt-24 bg-powder-blue">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardThree
            products={[
              { id: "1", name: "Original Snus", price: "$5.99", imageSrc: "/product1.jpg", onProductClick: () => window.open('https://example.com', '_blank'), initialQuantity: 1 },
              { id: "2", name: "Mint Snus", price: "$6.99", imageSrc: "/product2.jpg", onProductClick: () => window.open('https://example.com', '_blank'), initialQuantity: 1 },
              { id: "3", name: "Berry Snus", price: "$7.99", imageSrc: "/product3.jpg", onProductClick: () => window.open('https://example.com', '_blank'), initialQuantity: 1 }
            ]}
            className="bg-powder-blue"
            gridClassName="text-purple-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-powder-blue">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="We'd love to hear from you"
            description="Reach out with any questions or feedback."
            onSubmit={(email) => console.log(email)}
            className="bg-powder-blue"
            tagClassName="text-gray-800"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
            buttonClassName="text-white"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-gray-800 text-white">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }]},
              { title: "Support", items: [{ label: "FAQs", href: "faq" }, { label: "Privacy Policy", href: "privacy" }]} 
            ]}
            logoSrc="/brand/logowhite.svg"
            copyrightText="© 2025 Garant Snus"
            className="bg-gray-800 text-white"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}