
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Essential tools for beginning traders",
    price: "$9.99",
    period: "/month",
    features: [
      "Basic market analysis",
      "5 trades per day",
      "Email support",
      "Mobile app access"
    ],
    cta: "Start Free Trial",
    highlight: false
  },
  {
    name: "Professional",
    description: "Advanced features for active traders",
    price: "$29.99",
    period: "/month",
    features: [
      "Advanced analytics",
      "Unlimited trades",
      "Priority support",
      "Trading alerts",
      "Portfolio optimization"
    ],
    cta: "Sign Up Now",
    highlight: true
  },
  {
    name: "Enterprise",
    description: "Complete solution for professional traders",
    price: "$99.99",
    period: "/month",
    features: [
      "Full feature access",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "Risk management tools",
      "24/7 phone support"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Trading Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the plan that best fits your trading needs and growth goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`${plan.highlight ? 'shadow-lg border-primary/50 relative' : 'shadow'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.highlight ? '' : 'variant-outline'}`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
