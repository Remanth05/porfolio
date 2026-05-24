import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
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
  Users,
  Briefcase,
  GraduationCap,
  Star,
  Calendar,
  Award,
  Cloud,
  Cpu,
  Network,
  Server,
  GitBranch
} from "lucide-react";
import { useState } from "react";
const profileImage = "https://cdn.builder.io/api/v1/image/assets%2F50440a33a47940b994eb2f799fc8ca22%2Fb928a2ce36c4498aa287ea27cf2cd314?format=webp&width=800&height=1200";

const EMAILJS_PUBLIC_KEY = "01hIdeLaJOG3c3Vo4";
const EMAILJS_SERVICE_ID = "service_d0c2exi";
const EMAILJS_TEMPLATE_ID = "template_eu2yaxm";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSending(true);
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          reply_to: form.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast({ title: "Message sent", description: "Thanks! I’ll reply soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast({ title: "Failed to send", description: "Please try again later.", variant: "destructive" as any });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
        </div>
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="How can I help?" required />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." required className="min-h-[140px]" />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={sending} className="bg-gradient-to-r from-primary to-accent">
          {sending ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};

const Portfolio = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "ML Enthusiast",
      description: "Passionate about machine learning and AI integration to solve real-world problems"
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
      title: "DSA Enthusiast",
      description: "Strong foundation in Data Structures & Algorithms; writing optimized, scalable solutions and improving time/space complexity"
    }
  ];

  const projects = [
    {
      title: "ConnectNalco",
      description: "Internal web portal for NALCO improving plant task management and employee collaboration",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F50440a33a47940b994eb2f799fc8ca22%2F5c7c7caa97434236a84c71737147c0e5?format=webp&width=1200",
      github: "https://github.com/Remanth05/connectNalco.git",
      demo: "https://connectnalco.netlify.app/"
    },
    {
      title: "StreetVendorConnect",
      description: "Hyperlocal marketplace platform with role-based access and real-time order management",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F50440a33a47940b994eb2f799fc8ca22%2Fd3bb18a44bca4b14b554d86147339254?format=webp&width=1200",
      github: "https://github.com/Remanth05/StreetVendorConnect.git",
      demo: "https://streetvendor-connect.netlify.app/"
    },
    {
      title: "AI Resume Builder",
      description: "AI-powered tool with Clerk authentication and Gemini AI integration",
      tech: ["React", "Clerk", "Gemini AI", "Node.js"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F50440a33a47940b994eb2f799fc8ca22%2F47d5a9427a98458cba491ebd13e8e5fa?format=webp&width=1200",
      github: "https://github.com/Remanth05/AI-Resume-Builder.git",
      demo: "https://ai-resumebuilder-geminiai.netlify.app/"
    },
    {
      title: "Hospital Management",
      description: "Developed a scalable Hospital Management System using the MERN stack featuring appointment booking, patient record management, doctor scheduling, billing, and secure authentication. Integrated an AI chatbot powered by Gemini API to improve customer engagement and provide instant patient assistance.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Gemini AI"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F50440a33a47940b994eb2f799fc8ca22%2Fc07b957c4f42452d985d921d23437321?format=webp&width=800&height=1200",
      github: "https://github.com/Remanth05/healthhub.git",
      demo: "https://healthhub-demo.netlify.app/"
    }
  ];

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "Problem Solving", level: 90 },
    { name: "Database & SQL", level: 80 },
    { name: "AWS", level: 60 },
    { name: "Operating Systems", level: 70 },
    { name: "DBMS", level: 75 },
    { name: "Computer Networks", level: 70 },
    { name: "Teamwork", level: 85 },
    { name: "Adaptability", level: 80 },
    { name: "ML Enthusiast", level: 80 }
  ];

  const skillIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("sql") || n.includes("dbms") || n.includes("database") || n.includes("mongodb")) return <Database className="w-4 h-4" />;
    if (n.includes("dsa") || n.includes("data structures") || n.includes("problem")) return <Brain className="w-4 h-4" />;
    if (n.includes("aws") || n.includes("cloud")) return <Cloud className="w-4 h-4" />;
    if (n.includes("operating") || n.includes("systems") || n.includes("os")) return <Cpu className="w-4 h-4" />;
    if (n.includes("network")) return <Network className="w-4 h-4" />;
    if (n.includes("team") || n.includes("communication")) return <Users className="w-4 h-4" />;
    if (n.includes("adapt")) return <Star className="w-4 h-4" />;
    if (n.includes("express") || n.includes("node")) return <Server className="w-4 h-4" />;
    if (n.includes("git")) return <GitBranch className="w-4 h-4" />;
    if (n.includes("ui") || n.includes("design")) return <Palette className="w-4 h-4" />;
    if (n.includes("ai") || n.includes("ml") || n.includes("machine")) return <Brain className="w-4 h-4" />;
    return <Code className="w-4 h-4" />;
  };

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
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none hidden md:block"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000 motion-reduce:animate-none hidden md:block"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl hidden md:block"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20 hidden md:block">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce motion-reduce:animate-none"></div>
        </div>
        <div className="absolute top-1/3 right-20 opacity-20 hidden md:block">
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-500 motion-reduce:animate-none"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-20 hidden md:block">
          <div className="w-4 h-4 bg-primary/50 rounded-full animate-bounce delay-1000 motion-reduce:animate-none"></div>
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
                    DSA Enthusiast
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
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group transform hover:scale-105">
                  <a href="https://drive.google.com/uc?export=download&id=1rqkeg5oPyZ3mwJQMTd4BOfsZRoGf6LVw" download="Kuna_Remanth_Kumar_Resume.pdf">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary focus-visible:ring-primary backdrop-blur-sm">
                  <a href="#projects">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Portfolio
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <span className="text-sm text-muted-foreground">Connect with me:</span>
                <div className="flex gap-3">
                  <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                    <a href="https://github.com/Remanth05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                    <a href="https://linkedin.com/in/remanthkumar05" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors">
                    <a href="https://mail.google.com/mail/?view=cm&to=remanthkumar05@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
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
                  <div className="absolute inset-0 animate-spin-slow motion-reduce:animate-none hidden md:block">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-primary/30"></div>
                  </div>
                  <div className="absolute inset-4 animate-spin-slow motion-reduce:animate-none hidden md:block reverse">
                    <div className="w-full h-full rounded-full border-2 border-dotted border-accent/30"></div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-2xl animate-pulse motion-reduce:animate-none hidden md:block"></div>
                  
                  {/* Profile Image */}
                  <div className="relative z-10 w-80 h-80 mx-auto">
                    <img
                      src={profileImage}
                      alt="Kuna Remanth Kumar"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-700 filter group-hover:brightness-110"
                    />
                  </div>
                </div>

                {/* Floating Tech Cards */}
                <div className="absolute -top-8 -left-8 opacity-90 hidden md:block">
                  <Card className="bg-gradient-card border-primary/30 p-3 hover:scale-110 transition-transform duration-300 animate-float motion-reduce:animate-none md:backdrop-blur-md">
                    <CardContent className="p-0 flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">React</span>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute -top-4 -right-12 opacity-90 hidden md:block">
                  <Card className="bg-gradient-card border-accent/30 p-3 hover:scale-110 transition-transform duration-300 animate-float delay-500 motion-reduce:animate-none md:backdrop-blur-md">
                    <CardContent className="p-0 flex items-center gap-2">
                      <Database className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">MongoDB</span>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute -bottom-8 -left-12 opacity-90 hidden md:block">
                  <Card className="bg-gradient-card border-primary/30 p-3 hover:scale-110 transition-transform duration-300 animate-float delay-1000 motion-reduce:animate-none md:backdrop-blur-md">
                    <CardContent className="p-0 flex items-center gap-2">
                      <Palette className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Design</span>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute -bottom-4 -right-8 opacity-90 hidden md:block">
                  <Card className="bg-gradient-card border-accent/30 p-3 hover:scale-110 transition-transform duration-300 animate-float delay-700 motion-reduce:animate-none md:backdrop-blur-md">
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
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-card backdrop-blur-md border border-primary/20 mb-6">
              <Star className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-medium">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Expertise Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's check it out what I can do for you and your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group bg-gradient-card backdrop-blur-md border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 relative overflow-hidden">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                      {service.icon}
                    </div>
                    {/* Floating dot */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce">
                      <div className="w-2 h-2 bg-background rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 opacity-10">
          <Code className="w-32 h-32 text-primary" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-10">
          <Palette className="w-24 h-24 text-accent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative lg:order-2">
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Main Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                  <div className="relative bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-border/50">
                    <img
                      src={profileImage}
                      alt="Kuna Remanth Kumar"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                    />
                    
                    {/* Floating Achievement Cards */}
                    <div className="absolute -bottom-4 -left-6">
                      <Card className="bg-gradient-card backdrop-blur-md border-primary/30 p-3 animate-float delay-500">
                        <CardContent className="p-0 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium">NIT Patna</span>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:order-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-card backdrop-blur-md border border-accent/20 mb-6">
                <User className="w-4 h-4 text-accent mr-2" />
                <span className="text-accent font-medium">About Me</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Designing Solutions,
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
                  Not Just Visuals
                </span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My name is <span className="text-primary font-semibold">Kuna Remanth Kumar</span>, and I am currently pursuing B.Tech in Computer Science and Engineering at the National Institute of Technology, Patna.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have a strong interest in backend development with skills in Node.js, Express, MongoDB, and REST APIs. During my internship at <span className="text-accent font-semibold">NALCO Damanjodi</span>, I developed ConnectNalco, reflecting my passion for creating practical, problem-solving applications.
                </p>
              </div>

              {/* Achievement Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-4 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">NALCO Intern</div>
                      <div className="text-sm text-muted-foreground">Summer 2025</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-4 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Available</div>
                      <div className="text-sm text-muted-foreground">For Projects</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Skills Progress */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-lg border border-border/50 bg-gradient-card px-3 py-2 hover:border-primary/40 hover:shadow-glow transition-colors">
                      <span className="text-primary">{skillIcon(skill.name)}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-card backdrop-blur-md border border-primary/20 mb-6">
              <Briefcase className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-medium">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Digital Product Showcases
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Showcasing recent work and technical achievements that solve real-world problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group bg-gradient-card backdrop-blur-md border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-4 relative overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <Button asChild size="sm" variant="outline" className="backdrop-blur-md">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="backdrop-blur-md">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                  
                  {/* Project Number */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm text-accent font-medium">Featured Project</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <Button asChild variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="hover:bg-accent/10 hover:text-accent">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Preview
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <a href="#contact-form" className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-card backdrop-blur-md border border-accent/20 mb-6 hover:bg-accent/10 transition-colors">
              <Mail className="w-4 h-4 text-accent mr-2" />
              <span className="text-accent font-medium">Get In Touch</span>
            </a>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Got A Project? Let's Talk
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. Let's create something amazing together!
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="group bg-gradient-card backdrop-blur-md border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">Email Address</h3>
                  <p className="text-muted-foreground mb-4">Drop me a line anytime</p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=remanthkumar05@gmail.com"
                    target="_blank" rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    remanthkumar05@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-card backdrop-blur-md border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">Phone Number</h3>
                  <p className="text-muted-foreground mb-4">Call me for quick chat</p>
                  <a 
                    href="tel:+918885473487" 
                    className="text-accent hover:text-primary transition-colors font-medium"
                  >
                    +91 8885473487
                  </a>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-card backdrop-blur-md border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">Location</h3>
                  <p className="text-muted-foreground mb-4">Based in India</p>
                  <span className="text-primary font-medium">Patna, Bihar, India</span>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <Card id="contact-form" className="bg-gradient-card backdrop-blur-md border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  <ContactForm />
                </CardContent>
              </Card>
              <div className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-border/50">
                <h4 className="text-xl font-semibold mb-4">Prefer email?</h4>
                <p className="text-muted-foreground mb-4">You can also reach me directly at</p>
                <a href="https://mail.google.com/mail/?view=cm&to=remanthkumar05@gmail.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium">remanthkumar05@gmail.com</a>
                <div className="mt-6">
                  <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-accent" /><span className="text-foreground">+91 8885473487</span></div>
                  <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /><span className="text-foreground">Patna, Bihar, India</span></div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-card backdrop-blur-md rounded-3xl p-12 border border-border/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Ready to Start Your Project?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  I'm available for freelance projects and full-time opportunities. Let's discuss how we can bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-glow hover:shadow-primary/50 transition-all duration-300 group">
                    <a href="https://mail.google.com/mail/?view=cm&to=remanthkumar05@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Start Conversation
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 focus-visible:ring-purple-600 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                    <a href="https://drive.google.com/uc?export=download&id=1rqkeg5oPyZ3mwJQMTd4BOfsZRoGf6LVw" download="Kuna_Remanth_Kumar_CV.pdf">
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_1px,_transparent_1px)] bg-[size:30px_30px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  Remanth Kumar
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full Stack Developer passionate about creating innovative solutions that make a difference. 
                  Let's build something amazing together.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Remanth05"
                  target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-card backdrop-blur-md border border-border/50 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/remanthkumar05"
                  target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-card backdrop-blur-md border border-border/50 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=remanthkumar05@gmail.com"
                  target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-card backdrop-blur-md border border-border/50 rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
              <nav className="space-y-3">
                <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Home</a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-300">About</a>
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Services</a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Projects</a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-foreground">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a href="https://mail.google.com/mail/?view=cm&to=remanthkumar05@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">remanthkumar05@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">+91 8885473487</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Patna, Bihar, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground">
                  © 2024 Kuna Remanth Kumar. All rights reserved.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">Developed by</span>
                <span className="font-semibold text-foreground">Remanth</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
