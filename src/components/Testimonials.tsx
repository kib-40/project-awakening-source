
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    quote: "BMA Trade has completely transformed the way I approach trading. The platform is intuitive, fast, and gives me all the tools I need to make informed decisions.",
    author: "Sarah Johnson",
    position: "Professional Trader"
  },
  {
    quote: "As someone new to investing, I found BMA Trade to be incredibly user-friendly while still offering advanced features as I've grown more experienced.",
    author: "Michael Lee",
    position: "Retail Investor"
  },
  {
    quote: "The analytics tools available on BMA Trade have helped me identify opportunities I would have otherwise missed. My portfolio performance has improved significantly.",
    author: "David Chen",
    position: "Investment Advisor"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied traders who've improved their trading results with BMA Trade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="mb-4 text-2xl text-primary">"</div>
                <p className="italic mb-6">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.position}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
