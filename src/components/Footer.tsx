
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-paper py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link to="/" className="font-handwritten text-xl font-bold text-ink">
            Script.ify
          </Link>
          <p className="text-sm text-muted-foreground">
            Transform your text into personalized handwriting
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <nav className="flex gap-4 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-ink">
              Home
            </Link>
            <Link to="/instructions" className="text-muted-foreground hover:text-ink">
              Instructions
            </Link>
            <Link to="/coming-soon" className="text-muted-foreground hover:text-ink">
              Coming Soon
            </Link>
          </nav>
          
          <div className="flex items-center gap-1">
            <span className="text-sm text-muted-foreground">
              © 2025 Script.ify
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
