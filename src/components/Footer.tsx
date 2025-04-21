
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">BMA</span>
              <span className="text-xl font-semibold">Trade</span>
            </div>
            <p className="text-muted-foreground">
              Advanced trading solutions for the modern investor. Get started today and transform your trading experience.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Trading Platform</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Analytics Tools</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile App</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">API Access</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Community Forum</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} BMA Trade. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
