
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      if (!selectedFile.type.startsWith('image/')) {
        toast.error("Please upload an image file");
        return;
      }
      
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }

    setUploading(true);
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress > 100) {
        progress = 100;
        clearInterval(interval);
        
        // Simulate processing delay
        setTimeout(() => {
          setUploading(false);
          toast.success("Handwriting sample uploaded successfully!");
          
          // In a real application, we would process the handwriting here
          // and store results in a database or similar
          
          // Navigate to Convert page after successful upload
          navigate("/convert");
        }, 1000);
      }
      setUploadProgress(progress);
    }, 300);
  };

  const clearSelectedFile = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-ink mb-6">Upload Handwriting Sample</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
              <CardDescription>
                Upload a clear image of your handwriting sample
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>For best results:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Write all characters (A-Z, a-z, 0-9) on white paper with black or blue ink</li>
                <li>Write each character three times</li>
                <li>Make sure the image is well-lit and focused</li>
                <li>Include some example sentences in your natural writing style</li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full mt-4 border-ink text-ink hover:bg-ink hover:text-white"
                asChild
              >
                <a href="/template.pdf" download="handwriting-template.pdf">Download Template</a>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upload Sample</CardTitle>
              <CardDescription>
                Your handwriting image must be clear and well-lit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!preview ? (
                <div 
                  className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => document.getElementById("file-upload")?.click()}
                >
                  <svg
                    className="mx-auto h-12 w-12 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Drag and drop your image here, or click to browse
                  </p>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              ) : (
                <div className="relative">
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-2 right-2 bg-white hover:bg-muted z-10 rounded-full"
                    onClick={clearSelectedFile}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <img
                    src={preview}
                    alt="Handwriting Sample Preview"
                    className="w-full rounded-lg object-contain max-h-[300px]"
                  />
                </div>
              )}
              
              {uploading && (
                <div className="space-y-2">
                  <Progress value={uploadProgress} className="h-2" />
                  <p className="text-sm text-muted-foreground text-center">
                    {uploadProgress < 100
                      ? `Uploading... ${Math.round(uploadProgress)}%`
                      : "Processing your handwriting..."}
                  </p>
                </div>
              )}
              
              <Button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="w-full bg-ink hover:bg-ink-light"
              >
                {uploading ? "Processing..." : "Upload Sample"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
