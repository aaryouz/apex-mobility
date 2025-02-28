import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      content: "YourSaaS has completely transformed how we manage our workflow. The automation features alone have saved us countless hours every week.",
      author: "Sarah Johnson",
      role: "Operations Director, TechCorp",
      rating: 5
    },
    {
      content: "The analytics dashboard gives us insights we never had before. We've been able to identify and solve problems we didn't even know existed.",
      author: "Michael Chen",
      role: "CEO, Startup Innovations",
      rating: 5
    },
    {
      content: "I was skeptical at first, but after using YourSaaS for just one month, I can't imagine running our business without it. Worth every penny.",
      author: "Jessica Rodriguez",
      role: "Project Manager, Creative Solutions",
      rating: 5
    },
  ];
  
  return (
    <div id="testimonials" className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by thousands of businesses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="text-gray-700 mb-4">"{testimonial.content}"</div>
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
