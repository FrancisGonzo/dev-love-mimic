import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  remixes: number;
  imageUrl: string;
  authorAvatar?: string;
}

const ProjectCard = ({ title, category, remixes, imageUrl, authorAvatar }: ProjectCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1">
      {/* Project Screenshot */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/90">
              <Copy className="w-4 h-4 mr-1" />
              Remix
            </Button>
            <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/90">
              <ExternalLink className="w-4 h-4 mr-1" />
              Preview
            </Button>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
              {title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
          
          {authorAvatar && (
            <img 
              src={authorAvatar} 
              alt="Author"
              className="w-8 h-8 rounded-full border border-border/50"
            />
          )}
        </div>
        
        <p className="text-sm text-muted-foreground">
          {remixes.toLocaleString()} Remixes
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;