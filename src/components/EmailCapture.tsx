import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Gift, Crown } from 'lucide-react';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      toast({
        title: "Welcome to the VIP List! 🎉",
        description: "You're now among the first to experience Zehraar's luxury collection.",
      });
    }, 500);
  };

  if (isSubscribed) {
    return (
      <div className="glass-effect rounded-2xl p-8 text-center max-w-md mx-auto fade-in-up">
        <Crown className="w-12 h-12 text-gold mx-auto mb-4" />
        <h3 className="text-xl font-semibold luxury-text font-playfair mb-2">
          Welcome to VIP Access!
        </h3>
        <p className="text-muted-foreground text-sm">
          You'll be the first to know when we launch, plus receive exclusive early-bird pricing.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto fade-in-up stagger-3">
      <div className="glass-effect rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <Gift className="w-6 h-6 text-gold" />
          <h3 className="text-xl font-semibold luxury-text font-playfair">
            Be the First to Know
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm mb-6">
          Join our VIP list and get <span className="text-gold font-semibold">20% off</span> your first order plus exclusive early access.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-navy-light/50 border-gold/20 focus:border-gold focus:ring-gold"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-gold hover:shadow-gold text-navy font-semibold"
          >
            Get VIP Access
          </Button>
        </form>

        <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <span>No spam</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;