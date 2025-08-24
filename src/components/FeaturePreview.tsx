import { Sparkles, Award, Heart, Droplet } from 'lucide-react';

const FeaturePreview = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Artisan Crafted',
      description: 'Each fragrance meticulously crafted by master perfumers with rare ingredients.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Using only the finest oils and extracts sourced from around the world.'
    },
    {
      icon: Heart,
      title: 'Signature Scents',
      description: 'Unique compositions that tell your story and express your personality.'
    },
    {
      icon: Droplet,
      title: 'Long Lasting',
      description: 'Experience all-day elegance with our concentrated eau de parfum formula.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold luxury-text font-playfair mb-4">
          The Art of Fine Fragrance
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover what makes Zehraar the choice of those who appreciate true luxury and sophistication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass-effect rounded-xl p-6 text-center hover:shadow-gold transition-all duration-300 fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-6 h-6 text-navy" />
            </div>
            <h3 className="text-lg font-semibold luxury-text font-playfair mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturePreview;