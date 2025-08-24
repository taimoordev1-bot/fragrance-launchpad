import CountdownTimer from '@/components/CountdownTimer';
import EmailCapture from '@/components/EmailCapture';
import SocialProof from '@/components/SocialProof';
import FeaturePreview from '@/components/FeaturePreview';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import heroImage from '@/assets/hero-perfume.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-luxury">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold luxury-text font-playfair mb-4">
              Zehraar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-inter mb-2">
              Luxury Fragrance Collection
            </p>
            <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-8"></div>
          </div>

          <div className="fade-in-up stagger-1 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold luxury-text font-playfair mb-6">
              Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 font-inter">
              We're crafting something extraordinary for you. An exclusive collection of luxury perfumes 
              that will redefine elegance. Get ready to experience the art of fine fragrance like never before.
            </p>
          </div>

          <CountdownTimer />

          <div className="mt-16">
            <EmailCapture />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SocialProof />
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <FeaturePreview />
        </div>
      </section>

      {/* Social Media & Footer */}
      <footer className="py-16 px-4 border-t border-gold/20">
        <div className="container mx-auto text-center">
          <div className="fade-in-up mb-8">
            <h3 className="text-2xl font-bold luxury-text font-playfair mb-4">
              Follow Our Journey
            </h3>
            <p className="text-muted-foreground mb-6">
              Stay connected for behind-the-scenes content and exclusive updates
            </p>
            
            <div className="flex justify-center gap-4">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:shadow-gold transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-gold" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gold/20 pt-8">
            <p className="text-sm text-muted-foreground font-inter">
              © 2024 Zehraar. All rights reserved. Crafted with excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;