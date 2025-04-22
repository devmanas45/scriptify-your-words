
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PdfEditor() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [handwritingText, setHandwritingText] = useState("");
  const [activeTab, setActiveTab] = useState("add-text");
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Only accept PDFs
      if (selectedFile.type !== 'application/pdf') {
        toast.error("Please upload a PDF file");
        return;
      }
      
      setFile(selectedFile);
      
      // For demo purposes, we'll just show a placeholder
      setPreview('/placeholder.svg');
      
      toast.success("PDF uploaded successfully");
    }
  };
  
  const handleAddText = () => {
    if (!handwritingText.trim()) {
      toast.error("Please enter some text to add");
      return;
    }
    
    // In a real application, this would add the text to the PDF
    toast.success("Text added to PDF");
  };
  
  const handleDownload = () => {
    // In a real application, this would download the edited PDF
    toast.success("Edited PDF downloaded");
  };

  return (
    <div className="container py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-ink mb-6">PDF Editor</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pdf-upload">Upload PDF</Label>
                  <div 
                    className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => document.getElementById("pdf-upload")?.click()}
                  >
                    <svg
                      className="mx-auto h-10 w-10 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {file ? file.name : "Click to upload PDF"}
                    </p>
                    <input
                      id="pdf-upload"
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="add-text">Add Text</TabsTrigger>
                    <TabsTrigger value="draw" disabled={!file}>Draw</TabsTrigger>
                  </TabsList>
                  <TabsContent value="add-text" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="handwriting-text">Enter Handwritten Text</Label>
                      <Textarea
                        id="handwriting-text"
                        placeholder="Type your text here..."
                        className="min-h-[120px]"
                        value={handwritingText}
                        onChange={(e) => setHandwritingText(e.target.value)}
                        disabled={!file}
                      />
                    </div>
                    <Button 
                      className="w-full bg-ink hover:bg-ink-light" 
                      onClick={handleAddText}
                      disabled={!file}
                    >
                      Add to PDF
                    </Button>
                  </TabsContent>
                  <TabsContent value="draw">
                    <div className="flex flex-col items-center justify-center h-[180px] bg-muted/20 rounded-lg">
                      <p className="text-muted-foreground">Drawing feature coming soon...</p>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button 
                  variant="outline" 
                  className="w-full border-ink text-ink hover:bg-ink hover:text-white"
                  onClick={handleDownload}
                  disabled={!file}
                >
                  Download Edited PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3 space-y-6">
          <Card className="h-full">
            <CardContent className="pt-6 h-full">
              <Label className="mb-2">PDF Preview</Label>
              {preview ? (
                <div className="bg-white rounded-md border border-border h-[500px] flex items-center justify-center overflow-auto">
                  <img 
                    src={preview} 
                    alt="PDF Preview" 
                    className="max-h-full w-auto" 
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-muted/20 rounded-md h-[500px] p-8">
                  <div className="text-center text-muted-foreground">
                    <svg
                      className="mx-auto h-16 w-16 text-muted-foreground/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="mt-4">Upload a PDF to see the preview</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-ink text-ink hover:bg-ink hover:text-white"
                      onClick={() => document.getElementById("pdf-upload")?.click()}
                    >
                      Upload PDF
                    </Button>
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
