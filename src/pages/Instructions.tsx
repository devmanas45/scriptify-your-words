
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function Instructions() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-ink mb-2">Instructions</h1>
      <p className="text-muted-foreground mb-8">Follow these guidelines for optimal results</p>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Prepare Your Handwriting Sample</CardTitle>
            <CardDescription>
              Follow these guidelines to prepare your sample for the best results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium">Requirements:</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Use white paper with black or dark blue ink</li>
                  <li>Write all uppercase letters (A-Z)</li>
                  <li>Write all lowercase letters (a-z)</li>
                  <li>Write all numbers (0-9)</li>
                  <li>Write each character three times</li>
                  <li>Add some sample sentences in your natural handwriting</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium">Tips for better results:</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Write naturally - don't try to make it "perfect"</li>
                  <li>Use good lighting when taking a photo</li>
                  <li>Include different writing speeds (slow, normal, fast)</li>
                  <li>Make sure the image is clear and in focus</li>
                  <li>Include common punctuation marks</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-sm font-medium">Need a template?</p>
              <p className="text-sm text-muted-foreground mb-4">
                We've created a printable template to make this process easier
              </p>
              <Button 
                variant="outline" 
                className="border-ink text-ink hover:bg-ink hover:text-white"
                asChild
              >
                <a href="/template.pdf" download="handwriting-template.pdf">Download Template</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Step 2: Upload Your Sample</CardTitle>
            <CardDescription>
              Upload your handwriting sample to train our AI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium">How to upload:</h3>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>Take a clear photo of your handwriting sample</li>
                  <li>Make sure the image is well-lit and in focus</li>
                  <li>Navigate to the "Upload" page</li>
                  <li>Click to select your image or drag-and-drop</li>
                  <li>Wait for processing to complete</li>
                </ol>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium">Example:</h3>
                <div className="border rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Example handwriting sample"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            {isAuthenticated ? (
              <Button className="bg-ink hover:bg-ink-light" asChild>
                <Link to="/upload">Upload My Sample</Link>
              </Button>
            ) : (
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm font-medium">Ready to start?</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Sign in or create an account to upload your handwriting sample
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    className="border-ink text-ink hover:bg-ink hover:text-white"
                    asChild
                  >
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button
                    className="bg-ink hover:bg-ink-light"
                    asChild
                  >
                    <Link to="/signup">Create Account</Link>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Step 3: Convert Text to Handwriting</CardTitle>
            <CardDescription>
              Turn any typed text into your personal handwriting
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">How it works:</h3>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Our AI analyzes your handwriting patterns and style</li>
                <li>It creates a personalized handwriting model</li>
                <li>You can type or paste text in the convert page</li>
                <li>The AI generates handwritten output that looks like yours</li>
                <li>Download your handwritten text as an image</li>
                <li>Use the PDF editor to add handwriting to documents</li>
              </ol>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Button 
                className="bg-ink hover:bg-ink-light" 
                asChild
              >
                <Link to="/convert">Go to Text Converter</Link>
              </Button>
              <Button 
                variant="outline"
                className="border-ink text-ink hover:bg-ink hover:text-white"
                asChild
              >
                <Link to="/pdf-editor">Go to PDF Editor</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
