
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";

export default function Convert() {
  const [text, setText] = useState("");
  const [style, setStyle] = useState("default");
  const [size, setSize] = useState(16);
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!text.trim()) {
      toast.error("Please enter some text to convert");
      return;
    }

    setGenerating(true);
    setResult(null);

    // Simulate AI processing delay
    setTimeout(() => {
      setGenerating(false);
      setResult(text);
      toast.success("Text converted to handwriting!");
    }, 1500);
  };

  const handleDownload = () => {
    // In a real application, this would generate and download the image
    toast.success("Handwriting image downloaded");
  };

  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-ink mb-6">Convert Text to Handwriting</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="text">Enter your text</Label>
                  <Textarea
                    id="text"
                    placeholder="Type or paste text here to convert it to handwriting..."
                    className="min-h-[200px]"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="style">Handwriting Style</Label>
                    <Select 
                      value={style} 
                      onValueChange={setStyle}
                    >
                      <SelectTrigger id="style">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">My Handwriting</SelectItem>
                        <SelectItem value="neat">Neat Variation</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="size">Size</Label>
                      <span className="text-sm text-muted-foreground">{size}px</span>
                    </div>
                    <Slider
                      id="size"
                      min={10}
                      max={28}
                      step={1}
                      value={[size]}
                      onValueChange={(value) => setSize(value[0])}
                    />
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-ink hover:bg-ink-light" 
                  onClick={handleGenerate} 
                  disabled={generating}
                >
                  {generating ? "Generating..." : "Generate Handwriting"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="overflow-hidden h-full">
            <CardContent className="pt-6 flex flex-col h-full">
              <Label className="mb-2">Preview</Label>
              {generating ? (
                <div className="flex items-center justify-center flex-grow bg-muted/20 rounded-md p-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ink"></div>
                </div>
              ) : result ? (
                <div className="flex flex-col flex-grow">
                  <div className="paper-bg rounded-md p-6 flex-grow">
                    <p 
                      className="font-handwritten" 
                      style={{ fontSize: `${size}px` }}
                    >
                      {result}
                    </p>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-ink text-ink hover:bg-ink hover:text-white"
                      onClick={() => {
                        navigator.clipboard.writeText(text);
                        toast.success("Copied to clipboard");
                      }}
                    >
                      Copy Text
                    </Button>
                    <Button 
                      className="flex-1 bg-ink hover:bg-ink-light"
                      onClick={handleDownload}
                    >
                      Download Image
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center flex-grow bg-muted/20 rounded-md p-8">
                  <div className="text-center text-muted-foreground">
                    <svg
                      className="mx-auto h-12 w-12 text-muted-foreground/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                    <p className="mt-2">Your handwritten text will appear here</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
