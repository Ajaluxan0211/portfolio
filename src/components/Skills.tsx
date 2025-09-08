import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Palette, 
  Cloud, 
  Smartphone, 
  GitBranch,
  Settings,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'SASS'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Nginx'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA', 'Responsive Design'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Tools & Workflow',
      icon: GitBranch,
      skills: ['Git', 'GitHub Actions', 'Jira', 'Slack', 'VSCode', 'Postman'],
      color: 'from-gray-500 to-slate-600'
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies Mastered', value: '25+' },
    { label: 'Coffee Consumed', value: '∞' }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience 
              with cutting-edge technologies and best practices.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center bg-card/50 border-border hover:border-primary transition-smooth animate-fade-in hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group bg-card/50 border-border hover:border-primary transition-smooth animate-fade-in hover:shadow-glow"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-secondary/50 hover:bg-secondary transition-smooth hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground gradient-primary rounded-lg hover:shadow-glow transition-smooth hover:scale-105"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Start a Project
                </a>
                <a 
                  href="mailto:alex@example.com"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-smooth"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;