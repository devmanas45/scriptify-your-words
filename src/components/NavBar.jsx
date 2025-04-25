
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", requiresAuth: false },
    { name: "Instructions", path: "/instructions", requiresAuth: false },
    { name: "Upload", path: "/upload", requiresAuth: true },
    { name: "Convert", path: "/convert", requiresAuth: true },
    { name: "PDF Editor", path: "/pdf-editor", requiresAuth: true },
    { name: "History", path: "/history", requiresAuth: true },
    { name: "Coming Soon", path: "/coming-soon", requiresAuth: false },
  ];

  const filteredLinks = navLinks.filter(
    link => !link.requiresAuth || isAuthenticated
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-paper/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-handwritten text-2xl font-bold text-ink">Script.ify</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {filteredLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-ink",
                location.pathname === link.path ? "text-ink" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="ml-4 flex items-center gap-2">
            {isAuthenticated ? (
              <Button 
                onClick={logout} 
                variant="outline"
                className="border-ink text-ink hover:bg-ink hover:text-white"
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="border-ink text-ink hover:bg-ink hover:text-white"
                  asChild
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button
                  variant="default"
                  className="bg-ink hover:bg-ink-light"
                  asChild
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-paper shadow-md">
          <nav className="flex flex-col gap-2">
            {filteredLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "py-2 text-sm font-medium transition-colors hover:text-ink",
                  location.pathname === link.path ? "text-ink" : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-2 border-t border-border/40 mt-2">
              {isAuthenticated ? (
                <Button 
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full border-ink text-ink hover:bg-ink hover:text-white"
                >
                  Logout
                </Button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="w-full border-ink text-ink hover:bg-ink hover:text-white"
                    asChild
                  >
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button
                    variant="default"
                    className="w-full bg-ink hover:bg-ink-light"
                    asChild
                  >
                    <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
