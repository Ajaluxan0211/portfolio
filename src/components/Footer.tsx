import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="font-bold text-xl text-gradient mb-2">Alex Johnson</div>
              <p className="text-muted-foreground">
                Building digital experiences with passion and precision
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end space-y-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full border border-border hover:border-primary hover:shadow-glow transition-smooth"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>in San Francisco</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;