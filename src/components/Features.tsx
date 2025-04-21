
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Clock, Shield, Zap, Globe, LineChart } from "lucide-react";

const featuresData = [
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Advanced Analytics",
    description: "Get in-depth market analysis and trading insights based on real-time data."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "24/7 Trading",
    description: "Trade assets around the clock with our always-on platform and support team."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure Transactions",
    description: "Bank-level security protocols to ensure your assets and data are always protected."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Fast Execution",
    description: "Lightning-fast trade execution to help you stay ahead of market movements."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Markets",
    description: "Access to international markets and diverse asset classes all in one platform."
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Performance Tracking",
    description: "Monitor your portfolio performance with comprehensive reporting tools."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Trading Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform offers everything you need to trade with confidence and precision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
