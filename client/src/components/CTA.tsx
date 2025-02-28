import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-primary">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block">Try YourSaaS free for 14 days.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary-foreground/80">
          No credit card required. Cancel anytime. Full access to all features.
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="mt-8 w-full sm:w-auto"
          asChild
        >
          <Link href="/signup" className="flex items-center justify-center gap-2">
            Get started now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
