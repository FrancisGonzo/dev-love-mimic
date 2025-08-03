import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  FileText, 
  Folder, 
  Search, 
  Settings, 
  Play, 
  Save, 
  Download,
  Upload,
  MessageCircle,
  Send,
  Menu,
  Code,
  Eye,
  Maximize2
} from "lucide-react";

const IDE = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const sidebarItems = [
    { icon: FileText, label: "Files", active: true },
    { icon: Search, label: "Search" },
    { icon: Code, label: "Source Control" },
    { icon: Settings, label: "Settings" },
  ];

  const files = [
    { name: "src", type: "folder", expanded: true },
    { name: "App.tsx", type: "file", level: 1 },
    { name: "main.tsx", type: "file", level: 1 },
    { name: "components", type: "folder", level: 1, expanded: true },
    { name: "Button.tsx", type: "file", level: 2 },
    { name: "Input.tsx", type: "file", level: 2 },
    { name: "pages", type: "folder", level: 1 },
    { name: "public", type: "folder" },
    { name: "package.json", type: "file" },
  ];

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Top Navigation */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="p-4">
                  <h2 className="font-semibold text-lg">Project Files</h2>
                </div>
                <div className="px-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent rounded-sm cursor-pointer ${
                        file.level ? `ml-${file.level * 4}` : ""
                      }`}
                    >
                      {file.type === "folder" ? (
                        <Folder className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lovable-orange to-lovable-pink flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-semibold">my-awesome-project</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={isPreviewMode ? "default" : "ghost"}
              size="sm"
              onClick={() => setIsPreviewMode(!isPreviewMode)}
            >
              <Eye className="h-4 w-4 mr-2" />
              {isPreviewMode ? "Code" : "Preview"}
            </Button>
            <Button variant="ghost" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Play className="h-4 w-4 mr-2" />
              Run
            </Button>
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 border-r border-border bg-card/30 backdrop-blur-sm">
          <div className="w-12 bg-card/50 border-r border-border flex flex-col items-center py-4 gap-2">
            {sidebarItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "default" : "ghost"}
                size="sm"
                className="w-8 h-8 p-0"
              >
                <item.icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
          
          <div className="flex-1 p-4">
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Explorer</h3>
              <div className="space-y-1">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent rounded-sm cursor-pointer ${
                      file.level ? `ml-${file.level * 4}` : ""
                    }`}
                  >
                    {file.type === "folder" ? (
                      <Folder className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="border-b border-border bg-card/30 backdrop-blur-sm">
            <div className="flex items-center px-4 h-10">
              <div className="flex items-center gap-2 bg-accent px-3 py-1 rounded-sm text-sm">
                <FileText className="h-3 w-3" />
                App.tsx
                <button className="ml-2 hover:bg-background rounded p-0.5">
                  ×
                </button>
              </div>
            </div>
          </div>

          {/* Editor/Preview Area */}
          <div className="flex-1 relative">
            {isPreviewMode ? (
              <div className="h-full bg-gradient-to-br from-background via-accent/10 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-lovable-orange to-lovable-pink flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Preview Mode</h3>
                  <p className="text-muted-foreground">Your app preview will appear here</p>
                </div>
              </div>
            ) : (
              <div className="h-full bg-card/20 backdrop-blur-sm p-4 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-primary">import React from 'react';</div>
                  <div className="text-primary">import './App.css';</div>
                  <div className="text-muted-foreground">{"// ... keep existing code"}</div>
                  <div className="text-primary">function App() {"{"}</div>
                  <div className="ml-4 text-primary">return (</div>
                  <div className="ml-8 text-accent">{"<div className=\"App\">"}</div>
                  <div className="ml-12 text-muted-foreground">{"// Your beautiful app content"}</div>
                  <div className="ml-8 text-accent">{"</div>"}</div>
                  <div className="ml-4 text-primary">);</div>
                  <div className="text-primary">{"}"}</div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Interface */}
          <div className="border-t border-border bg-card/50 backdrop-blur-sm">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Chat with Lovable</span>
              </div>
              
              <div className="flex gap-2">
                <Input
                  placeholder="Ask Lovable to create a landing page..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1"
                />
                <Button size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDE;