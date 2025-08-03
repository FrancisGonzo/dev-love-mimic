import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

const CommunitySection = () => {
  const categories = [
    "Popular", "Discover", "Internal Tools", "Website", 
    "Personal", "Consumer App", "B2B App", "Prototype"
  ];

  const featuredProjects = [
    {
      title: "pulse-robot-template",
      category: "Website",
      remixes: 21336,
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=entropy&auto=format",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      title: "cryptocurrency-trading-dashboard",
      category: "Website",
      remixes: 13185,
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=entropy&auto=format",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      title: "ai-integration-platform",
      category: "Website",
      remixes: 8014,
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=entropy&auto=format",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      title: "modern-saas-landing",
      category: "Website", 
      remixes: 6892,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=entropy&auto=format",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face&auto=format"
    }
  ];

  return (
    <div className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              From the Community
            </h2>
            <p className="text-muted-foreground">
              Discover amazing projects built by the Lovable community
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:inline-flex">
            View All
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="Popular" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 mb-8 bg-muted/30">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-xs md:text-sm"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="Popular" className="space-y-6">
            {/* Featured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  category={project.category}
                  remixes={project.remixes}
                  imageUrl={project.imageUrl}
                  authorAvatar={project.authorAvatar}
                />
              ))}
            </div>
          </TabsContent>

          {/* Other tab contents would be similar */}
          {categories.slice(1).map((category) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    category={project.category}
                    remixes={project.remixes}
                    imageUrl={project.imageUrl}
                    authorAvatar={project.authorAvatar}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CommunitySection;
