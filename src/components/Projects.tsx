import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'TaskFlow Pro',
      description: 'A comprehensive project management platform with real-time collaboration features, built with React and Node.js.',
      image: project1,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://taskflow-pro.demo',
      featured: true
    },
    {
      title: 'EcoCommerce',
      description: 'Sustainable e-commerce platform focusing on eco-friendly products with advanced filtering and payment integration.',
      image: project2,
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Vercel', 'TypeScript'],
      github: 'https://github.com',
      live: 'https://ecocommerce.demo',
      featured: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard for business intelligence with interactive charts and custom reporting.',
      image: project3,
      technologies: ['Vue.js', 'D3.js', 'Express', 'Redis', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://analytics.demo',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in full-stack development 
              and modern web technologies.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group overflow-hidden bg-card/50 border-border hover:border-primary transition-smooth animate-fade-in ${
                  project.featured ? 'md:grid md:grid-cols-2 md:gap-0' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative overflow-hidden ${project.featured ? 'md:order-1' : ''}`}>
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-64 md:h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className={`p-6 flex flex-col justify-between ${project.featured ? 'md:order-2' : ''}`}>
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                        {project.featured && (
                          <Badge className="gradient-primary text-primary-foreground">Featured</Badge>
                        )}
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="bg-secondary/50 hover:bg-secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gradient hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="gradient-primary hover:shadow-glow"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button 
              variant="outline" 
              size="lg"
              className="border-gradient hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;