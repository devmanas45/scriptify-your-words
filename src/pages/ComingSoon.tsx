
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function ComingSoon() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    // In a real app, this would subscribe the user to updates
    toast.success(`Subscribed ${email} to updates`);
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <div className="container max-w-6xl py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-ink mb-4">Coming Soon</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're working on exciting new features to make Script.ify even more powerful
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="flex flex-col h-full">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <CardTitle>Signature Generator</CardTitle>
            <CardDescription>
              Create personalized digital signatures for documents
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Multiple signature styles</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>One-click document signing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Legal document support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground italic">Coming Q3 2025</div>
          </CardFooter>
        </Card>
        
        <Card className="flex flex-col h-full">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <CardTitle>Multilingual Support</CardTitle>
            <CardDescription>
              Create handwriting in multiple languages
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Support for 15+ languages</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Character variations by language</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Specialized script training</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground italic">Coming Q4 2025</div>
          </CardFooter>
        </Card>
        
        <Card className="flex flex-col h-full">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <CardTitle>Style Transfer</CardTitle>
            <CardDescription>
              Transfer your handwriting style to different script types
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cursive to print conversion</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Calligraphy style generation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Historical handwriting emulation</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground italic">Coming Q1 2026</div>
          </CardFooter>
        </Card>
      </div>
      
      <Card className="mt-12 bg-ink text-white">
        <CardHeader>
          <CardTitle className="text-xl text-center">Stay Updated</CardTitle>
          <CardDescription className="text-white/80 text-center">
            Subscribe to be notified when new features are released
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/60"
              required
            />
            <Button type="submit" className="bg-white text-ink hover:bg-white/90">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
