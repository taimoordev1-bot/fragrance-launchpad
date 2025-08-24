import { Users, Star, Zap } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: '2,847',
      label: 'VIP Members',
      description: 'Exclusive early access'
    },
    {
      icon: Star,
      value: '5.0',
      label: 'Expected Rating',
      description: 'Luxury craftsmanship'
    },
    {
      icon: Zap,
      value: '24h',
      label: 'Limited Time',
      description: 'Early bird pricing'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto fade-in-up stagger-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="glass-effect rounded-xl p-6 text-center floating-animation"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
          <div className="text-2xl font-bold luxury-text font-playfair mb-1">
            {stat.value}
          </div>
          <div className="text-sm font-semibold text-foreground mb-1">
            {stat.label}
          </div>
          <div className="text-xs text-muted-foreground">
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialProof;