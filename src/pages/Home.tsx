
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-paper to-muted">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="font-handwritten font-bold text-4xl md:text-5xl lg:text-6xl text-ink">
                Your handwriting, digitized
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                Transform typed text into your unique handwriting style with our AI-powered technology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {isAuthenticated ? (
                <>
                  <Button asChild size="lg" className="bg-ink hover:bg-ink-light">
                    <Link to="/upload">Upload Sample</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-ink text-ink hover:bg-ink hover:text-white">
                    <Link to="/convert">Convert Text</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild size="lg" className="bg-ink hover:bg-ink-light">
                    <Link to="/signup">Get Started</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-ink text-ink hover:bg-ink hover:text-white">
                    <Link to="/instructions">Learn More</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="flex-1 relative min-h-[300px] md:min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] bg-white rounded-lg shadow-lg p-8 rotate-2 transform transition-transform duration-300 hover:rotate-0">
                <div className="absolute top-0 left-0 w-full h-full bg-paper-lined rounded-lg z-0"></div>
                <div className="relative z-10 space-y-4 font-handwritten text-ink">
                  <p className="text-lg">Dear friend,</p>
                  <p>This is how your handwriting could look with our AI technology. Personalized, consistent, and uniquely yours.</p>
                  <p className="text-right">Sincerely,<br/>Script.ify</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-paper">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-ink mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <svg className="w-8 h-8 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-ink">Upload Sample</h3>
              <p className="text-muted-foreground">Provide a sample of your handwriting for our AI to learn your unique style.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <svg className="w-8 h-8 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-ink">AI Processing</h3>
              <p className="text-muted-foreground">Our AI analyzes your sample to understand the nuances of your handwriting.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <svg className="w-8 h-8 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-ink">Convert Text</h3>
              <p className="text-muted-foreground">Type any text and watch it transform into your personal handwriting style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ink text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of users who are already enjoying the benefits of personalized handwriting.
          </p>
          {isAuthenticated ? (
            <Button asChild size="lg" className="bg-white text-ink hover:bg-gray-100">
              <Link to="/upload">Upload Your Sample</Link>
            </Button>
          ) : (
            <Button asChild size="lg" className="bg-white text-ink hover:bg-gray-100">
              <Link to="/signup">Create Free Account</Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
