import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Database, 
  Brain, 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  User,
  Briefcase,
  GraduationCap,
  Star,
  Calendar,
  Award
} from "lucide-react";
import profileImage from "../assets/profile-image.jpg";

const Portfolio = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with modern design principles"
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Full Stack Development",
      description: "Building scalable web applications using MERN stack and modern technologies"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Backend Development",
      description: "Developing robust APIs and database solutions for complex applications"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Problem Solving",
      description: "Analyzing complex problems and implementing efficient algorithmic solutions"
    }
  ];

  const projects = [
    {
      title: "ConnectNalco",
      description: "Internal web portal for NALCO improving plant task management and employee collaboration",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/placeholder.svg",
      github: "https://github.com/Remanth05",
      demo: "#"
    },
    {
      title: "StreetVendorConnect",
      description: "Hyperlocal marketplace platform with role-based access and real-time order management",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      image: "/placeholder.svg",
      github: "https://github.com/Remanth05",
      demo: "#"
    },
    {
      title: "AI Resume Builder",
      description: "AI-powered tool with Clerk authentication and Gemini AI integration",
      tech: ["React", "Clerk", "Gemini AI", "Node.js"],
      image: "/placeholder.svg",
      github: "https://github.com/Remanth05",
      demo: "#"
    }
  ];

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 80 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Remanth
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-1/3 right-20 opacity-20">
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-500"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-20">
          <div className="w-4 h-4 bg-primary/50 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-card backdrop-blur-md border border-primary/20 shadow-glow">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-sm font-medium text-foreground">Available for new opportunities</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-lg text-accent font-medium">👋 Hello, I'm</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-fade-in">
                    Kuna Remanth
                  </span>
                  <span className="block bg-gradient-to-r from-accent via-primary to-foreground bg-clip-text text-transparent animate-fade-in delay-300">
                    Kumar
                  </span>
                </h1>
              </div>

              {/* Role Description */}
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
                    Full Stack Developer
                  </Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-2 text-sm">
                    UI/UX Enthusiast
                  </Badge>
                  <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
                    Problem Solver
                  </Badge>
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Building impactful applications that solve real-world problems with modern technologies and innovative design approaches.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-4 text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-4 text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-accent">NIT</div>
                    <div className="text-xs text-muted-foreground">Patna</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-4 text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary">MERN</div>
                    <div className="text-xs text-muted-foreground">Stack</div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-glow hover:shadow-primary/50 transition-all duration-300 group">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 backdrop-blur-sm">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Portfolio
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <span className="text-sm text-muted-foreground">Connect with me:</span>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative lg:pl-12">
              <div className="relative mx-auto lg:mx-0 max-w-md">
                {/* Main Image Container */}
                <div className="relative">
                  {/* Animated Rings */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-primary/30"></div>
                  </div>
                  <div className="absolute inset-4 animate-spin-slow reverse">
                    <div className="w-full h-full rounded-full border-2 border-dotted border-accent/30"></div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-2xl animate-pulse"></div>
                  
                  {/* Profile Image */}
                  <div className="relative z-10 w-80 h-80 mx-auto">
                    <img
                      src={profileImage}
                      alt="Kuna Remanth Kumar"
                      className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Tech Cards */}
                <div className="absolute -top-8 -left-8 opacity-90">
                  <Card className="bg-gradient-card backdrop-blur-md border-primary/30 p-3 hover:scale-110 transition-transform duration-300 animate-float">
                    <CardContent className="p-0 flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">React</span>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute -top-4 -right-12 opacity-90">
                  <Card className="bg-gradient-card backdrop-blur-md border-accent/30 p-3 hover:scale-110 transition-transform duration-300 animate-float delay-500">
                    <CardContent className="p-0 flex items-center gap-2">
                      <Database className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">MongoDB</span>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute -bottom-8 -left-12 opacity-90">
                  <Card className="bg-gradient-card backdrop-blur-md border-primary/30 p-3 hover:scale-110 transition-transform duration-300 animate-float delay-1000">
                    <CardContent className="p-0 flex items-center gap-2">
                      <Palette className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Design</span>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute -bottom-4 -right-8 opacity-90">
                  <Card className="bg-gradient-card backdrop-blur-md border-accent/30 p-3 hover:scale-110 transition-transform duration-300 animate-float delay-700">
                    <CardContent className="p-0 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">Node.js</span>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 opacity-60">
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">Services</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Providing comprehensive development solutions from concept to deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-96 h-96 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20"></div>
                <img
                  src={profileImage}
                  alt="Kuna Remanth Kumar"
                  className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-card"
                />
              </div>
            </div>
            <div>
              <Badge variant="outline" className="mb-4 border-accent text-accent">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Creating Solutions, Not Just Visuals</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My name is Kuna Remanth Kumar, and I am currently pursuing B.Tech in Computer Science and Engineering 
                at the National Institute of Technology, Patna. I completed my schooling at Delhi Public School, Visakhapatnam.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I have a strong interest in backend development with skills in Node.js, Express, MongoDB, and REST APIs, 
                and hands-on experience with the MERN stack. During my internship at NALCO Damanjodi, I developed 
                ConnectNalco to manage plant tasks and employee services, reflecting my passion for creating practical, 
                problem-solving applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm">B.Tech CSE, NIT Patna</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="text-sm">NALCO Intern 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">94.6% Intermediate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm">Available for Projects</span>
                </div>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">Portfolio</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing recent work and technical achievements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent text-accent">Contact</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-card backdrop-blur-md border-border/50 text-center">
                <CardContent className="p-8">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">kunak.ug23.cs@nitp.ac.in</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card backdrop-blur-md border-border/50 text-center">
                <CardContent className="p-8">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 8885473487</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card backdrop-blur-md border-border/50 text-center">
                <CardContent className="p-8">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Patna, Bihar, India</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Kuna Remanth Kumar. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/Remanth05" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/remanthkumar05" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;