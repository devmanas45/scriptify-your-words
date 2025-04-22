
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Mock data for history items
const mockUploads = [
  {
    id: "upload-1",
    type: "upload",
    date: new Date(2025, 3, 20),
    title: "Handwriting Sample",
    preview: "/placeholder.svg",
  },
  {
    id: "upload-2",
    type: "upload",
    date: new Date(2025, 3, 15),
    title: "Signature Sample",
    preview: "/placeholder.svg",
  }
];

const mockConversions = [
  {
    id: "conversion-1",
    type: "conversion",
    date: new Date(2025, 3, 21),
    title: "Class Notes",
    content: "These are my class notes converted to handwriting...",
    preview: "/placeholder.svg",
  },
  {
    id: "conversion-2",
    type: "conversion",
    date: new Date(2025, 3, 18),
    title: "Letter Draft",
    content: "Dear friend, I wanted to write to you...",
    preview: "/placeholder.svg",
  },
  {
    id: "conversion-3",
    type: "conversion",
    date: new Date(2025, 3, 10),
    title: "Journal Entry",
    content: "Today I learned about AI and handwriting...",
    preview: "/placeholder.svg",
  }
];

const mockPdfs = [
  {
    id: "pdf-1",
    type: "pdf",
    date: new Date(2025, 3, 19),
    title: "Signed Contract",
    preview: "/placeholder.svg",
  },
  {
    id: "pdf-2",
    type: "pdf",
    date: new Date(2025, 3, 17),
    title: "Form Completion",
    preview: "/placeholder.svg",
  }
];

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function History() {
  const [activeTab, setActiveTab] = useState("all");
  
  const handleDownload = (id: string, type: string) => {
    // In a real app, this would download the file
    toast.success(`Downloaded ${type}`);
  };
  
  const handleDelete = (id: string, type: string) => {
    // In a real app, this would delete the item
    toast.success(`Deleted ${type}`);
  };
  
  const getFilteredItems = () => {
    switch (activeTab) {
      case "uploads":
        return mockUploads;
      case "conversions":
        return mockConversions;
      case "pdfs":
        return mockPdfs;
      default:
        return [...mockUploads, ...mockConversions, ...mockPdfs].sort((a, b) => 
          b.date.getTime() - a.date.getTime()
        );
    }
  };
  
  const filteredItems = getFilteredItems();

  return (
    <div className="container py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-ink mb-6">History</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="uploads">Uploads</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
          <TabsTrigger value="pdfs">PDFs</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <img
                      src={item.preview}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 capitalize">
                      {item.type}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {item.type === 'conversion' && 'content' in item && (
                      <p className="text-sm text-muted-foreground font-handwritten line-clamp-3">
                        {item.content}
                      </p>
                    )}
                  </CardContent>
                  <div className="px-6 py-4 border-t border-border mt-auto">
                    <div className="flex gap-2">
                      <Button 
                        variant="outline"
                        className="flex-1 text-sm border-ink text-ink hover:bg-ink hover:text-white"
                        onClick={() => handleDownload(item.id, item.type)}
                      >
                        Download
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 text-sm border-destructive text-destructive hover:bg-destructive hover:text-white"
                        onClick={() => handleDelete(item.id, item.type)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 bg-muted/20 rounded-lg">
              <svg
                className="h-16 w-16 text-muted-foreground/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="mt-4 text-xl font-medium">No items found</p>
              <p className="text-muted-foreground">
                Items will appear here after you upload samples or convert text
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
