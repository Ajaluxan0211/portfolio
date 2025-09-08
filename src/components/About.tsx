import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap } from 'lucide-react';
import profilePhoto from '@/assets/ajai.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, user-centered interfaces that delight users.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and exceptional user experience.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-white">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with 1+ years of experience creating digital solutions 
              that bridge the gap between design and functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src={profilePhoto}
                  alt="Alex Johnson - Full Stack Developer"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4">
                Building the future, one line of code at a time
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a full-stack developer based in Sri lanka, specializing in modern 
                web technologies. My journey began with a curiosity for how things work, 
                which led me to fall in love with programming and design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or capturing moments through photography. I believe 
                in continuous learning and staying at the forefront of tech innovation.
              </p>

              <div className="grid gap-4 mt-8">
                {highlights.map((item, index) => (
                  <Card key={index} className="bg-card/50 border-border hover:border-primary transition-smooth">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="p-2 rounded-lg gradient-primary">
                        <item.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;