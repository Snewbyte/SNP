"use client"; // This tells Next.js that this is a client-side component

/**
 * PORTFOLIO WEBSITE
 * 
 * This file creates a professional portfolio website with the following sections:
 * - Navigation bar with your name and links to each section
 * - Hero section with your photo and a brief introduction
 * - About section with your background and experience
 * - Projects section showcasing your work
 * - Skills section displaying your technical abilities
 * - Contact section for visitors to reach out to you
 * - Footer with copyright information
 * 
 * The site includes:
 * - Dark/light mode that can be toggled and auto-detects system preference
 * - Smooth scrolling between sections
 * - Responsive design that works on mobile, tablet, and desktop
 * - Animated hover effects for better user interaction
 */

// Import necessary libraries and components
import { useState, useEffect } from "react"; // For state management and side effects
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"; // Social media icons
import { HiOutlineMail } from "react-icons/hi"; // Email icon
import { IoMoon, IoSunny } from "react-icons/io5"; // Theme toggle icons
import Image from "next/image"; // Next.js optimized Image component
import {
  AppBar, // Top navigation bar
  Box, // Basic layout container
  Button, // Clickable buttons
  Card, // Card components for projects
  CardActions, // Bottom section of cards for buttons
  CardContent, // Main content area of cards
  Container, // Centered, width-limited container
  createTheme, // Function to create a theme
  CssBaseline, // Resets CSS to a consistent baseline
  Divider, // Horizontal line separator
  Grid as MuiGrid, // Layout grid system
  IconButton, // Button with just an icon
  Link, // Hyperlink component
  Paper, // Elevated surfaces
  TextField, // Text input fields
  ThemeProvider, // Provides theme to child components
  Toolbar, // Container for app bar content
  Typography, // Text component with different variants
  useMediaQuery, // Hook to check media queries
} from "@mui/material";

// Main component for the entire page
export default function Home() {
  // Check if user's system prefers dark mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // State to track if dark mode is active
  const [darkMode, setDarkMode] = useState(true);

  // Update dark mode when system preference changes
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  // Create a theme based on dark/light mode preference
  const theme = createTheme({
    // Color palette configuration
    palette: {
      mode: darkMode ? 'dark' : 'light', // Overall theme mode
      primary: {
        main: '#3a86ff', // Primary blue color
      },
      secondary: {
        main: '#ff006e', // Secondary pink color
      },
      background: {
        default: darkMode ? '#0a1929' : '#f8fafc', // Page background
        paper: darkMode ? '#132f4c' : '#ffffff', // Card/paper background
      },
    },
    // Typography (font) settings
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      // Make headings bold
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
    },
    // Shape settings (like border radius)
    shape: {
      borderRadius: 12, // Rounded corners
    },
    // Component-specific style overrides
    components: {
      // Button styling
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none', // Don't uppercase button text
            fontWeight: 600, // Semi-bold button text
            borderRadius: 8, // Rounded button corners
            padding: '10px 20px', // Button padding
          },
        },
      },
      // Card styling
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16, // More rounded card corners
            overflow: 'hidden', // Hide overflow
          },
        },
      },
      // Paper styling
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16, // Rounded paper corners
          },
        },
      },
    },
  });

  // Custom styles for various elements throughout the site
  const styles = {
    // Background gradient for the entire page
    gradientBg: {
      background: darkMode 
        ? 'linear-gradient(to bottom right, #0a1929, #132f4c)' // Dark mode gradient
        : 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)', // Light mode gradient
      minHeight: '100vh', // Full viewport height
    },
    // Navigation bar styling
    navBar: {
      backdropFilter: 'blur(12px)', // Blur effect
      backgroundColor: darkMode ? 'rgba(19, 47, 76, 0.8)' : 'rgba(255, 255, 255, 0.8)', // Semi-transparent bg
      boxShadow: darkMode ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 4px 30px rgba(0, 0, 0, 0.05)', // Subtle shadow
      borderRadius: '0px',
    },
    // Hero section (top intro area)
    heroSection: {
      position: 'relative',
      overflow: 'hidden',
      padding: '6rem 0 10rem 0', // Top and bottom padding
      backgroundColor: darkMode ? '#132f4c' : '#ffffff',
    },
    // Decorative gradient background in hero section
    heroGradient: {
      position: 'absolute',
      inset: 0, // Shorthand for top, right, bottom, left = 0
      zIndex: 0,
      opacity: 0.1, // Very subtle
    },
    // Inner colored gradient for visual effect
    innerGradient: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, #3a86ff, #ff006e)', // Blue to pink gradient
      transform: 'rotate(12deg) translateX(50%) translateY(33%)', // Tilted and positioned
    },
    // Section title styling
    sectionTitle: {
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1, // Appear above decorative elements
    },
    // Colored divider under section titles
    divider: {
      width: '5rem',
      height: '4px',
      margin: '0.5rem auto 2rem auto',
      backgroundColor: '#3a86ff', // Blue accent
      borderRadius: '2px',
    },
    // Project card styling
    projectCard: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth animations
      '&:hover': {
        transform: 'translateY(-8px)', // Lift up on hover
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)', // Stronger shadow on hover
      },
    },
    // Skills label (name + percentage)
    skillLabel: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.25rem',
    },
    // Skills progress bar background
    skillProgress: {
      height: 8,
      borderRadius: 4,
      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    },
    // Skills progress bar filled area
    skillProgressBar: {
      backgroundImage: 'linear-gradient(to right, #3a86ff, #5e60ce)', // Blue gradient
      borderRadius: 4,
    },
    // Technology tag styling (Docker, AWS, etc.)
    techTag: {
      padding: '0.5rem 1rem',
      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
      borderRadius: '8px',
      border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
      color: darkMode ? '#e2e8f0' : '#334155',
      margin: '0.375rem',
      display: 'inline-block',
      fontWeight: 500,
    },
    // Contact form styling
    contactForm: {
      '& .MuiTextField-root': {
        marginBottom: '1.5rem', // Space between form fields
      },
    },
    // Social media icon styling
    socialIcon: {
      color: darkMode ? '#e2e8f0' : '#475569',
      fontSize: '1.5rem',
      marginRight: '1rem',
      transition: 'color 0.2s, transform 0.2s', // Smooth hover animation
      '&:hover': {
        color: '#3a86ff', // Blue on hover
        transform: 'translateY(-3px)', // Lift slightly
      },
    },
    // Container for main content in sections
    sectionContainer: {
      position: 'relative',
      zIndex: 1, // Above decorative elements
    },
    // Profile image styling
    profileImage: {
      border: darkMode ? '4px solid #132f4c' : '4px solid #ffffff', // Border around image
      boxShadow: darkMode 
        ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
        : '0 20px 40px rgba(0, 0, 0, 0.15)', // Shadow under image
    },
    // Decorative circular shape in sections
    sectionShape: {
      position: 'absolute',
      bottom: -100,
      right: -100,
      width: 300,
      height: 300,
      borderRadius: '50%', // Circle
      background: 'linear-gradient(135deg, rgba(58, 134, 255, 0.1), rgba(255, 0, 110, 0.1))', // Subtle gradient
      zIndex: 0, // Behind content
    },
  };

  // Sample project data - replace with your own
  const projectsData = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration that handles 10,000+ monthly transactions.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/johndoe/ecommerce",
      demo: "https://ecommerce-demo.example.com"
    },
    {
      title: "SaaS Analytics Dashboard",
      description: "An analytics dashboard for SaaS businesses with real-time data visualization and custom reporting features.",
      image: "/project2.jpg",
      technologies: ["Next.js", "TypeScript", "D3.js"],
      github: "https://github.com/johndoe/saas-dashboard",
      demo: "https://saas-dashboard.example.com"
    },
    {
      title: "AI Chat Application",
      description: "A real-time chat application with AI-powered responses and language translation supporting 20+ languages.",
      image: "/project3.jpg",
      technologies: ["React", "Socket.io", "OpenAI API"],
      github: "https://github.com/johndoe/ai-chat",
      demo: "https://ai-chat.example.com"
    },
  ];

  // Frontend skills with proficiency levels
  const frontendSkills = [
    { name: "React / Next.js", value: 95 },
    { name: "TypeScript", value: 90 },
    { name: "UI/UX Design", value: 85 },
  ];

  // Backend skills with proficiency levels
  const backendSkills = [
    { name: "Node.js / Express", value: 85 },
    { name: "Database Design", value: 80 },
    { name: "GraphQL", value: 75 },
  ];

  // Other technologies you're familiar with
  const otherTechnologies = [
    "Docker", "AWS", "CI/CD", "Jest", "Git", 
    "Redux", "Firebase", "Webpack", "TailwindCSS", "Figma"
  ];

  // Function to smoothly scroll to different sections
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth', // Smooth scrolling animation
        top: element.offsetTop - 64 // Offset for the navbar height
      });
    }
  };

  // THE ACTUAL WEBSITE LAYOUT STARTS HERE
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset CSS for consistency */}
      <Box sx={styles.gradientBg}>
        {/* ===== NAVIGATION BAR ===== */}
        <AppBar position="sticky" elevation={0} sx={styles.navBar} color="transparent">
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              {/* Your name/logo */}
              <Typography variant="h6" fontWeight="bold" color="text.primary">
                <Box component="span" sx={{ color: theme.palette.primary.main }}>John</Box>Doe
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Navigation links - hidden on mobile */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <Button 
                    onClick={() => scrollToSection('about')} 
                    color="inherit" 
                    sx={{ mx: 1 }}
                  >
                    About
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('projects')} 
                    color="inherit" 
                    sx={{ mx: 1 }}
                  >
                    Projects
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('skills')} 
                    color="inherit" 
                    sx={{ mx: 1 }}
                  >
                    Skills
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('contact')} 
                    color="inherit" 
                    sx={{ mx: 1 }}
                  >
                    Contact
                  </Button>
                </Box>
                
                {/* Social media icons */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  ml: 2,
                  borderLeft: { xs: 'none', md: '1px solid' }, // Divider line (hidden on mobile)
                  borderColor: 'divider',
                  borderRight: { xs: 'none', md: '1px solid' },
                  pl: { xs: 0, md: 2 },
                  pr: { xs: 0, md: 2 }
                }}>
                  {/* GitHub link */}
                  <IconButton 
                    href="https://github.com/johndoe" 
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    size="small"
                    sx={{ 
                      mx: 0.5,
                      transition: 'transform 0.2s, color 0.2s',
                      '&:hover': {
                        color: darkMode ? '#f0f6fc' : '#24292e',
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    <FaGithub />
                  </IconButton>
                  
                  {/* LinkedIn link */}
                  <IconButton 
                    href="https://linkedin.com/in/johndoe" 
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    size="small"
                    sx={{ 
                      mx: 0.5,
                      transition: 'transform 0.2s, color 0.2s',
                      '&:hover': {
                        color: '#0a66c2',
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    <FaLinkedinIn />
                  </IconButton>
                  
                  {/* Twitter link */}
                  <IconButton 
                    href="https://twitter.com/johndoe" 
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    size="small"
                    sx={{ 
                      mx: 0.5,
                      transition: 'transform 0.2s, color 0.2s',
                      '&:hover': {
                        color: '#1da1f2',
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    <FaTwitter />
                  </IconButton>
                </Box>

                {/* Dark/light mode toggle */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  ml: 2,
                }}>
                  <IconButton 
                    onClick={() => setDarkMode(!darkMode)} 
                    sx={{ ml: 1 }}
                    color="inherit"
                  >
                    {darkMode ? <IoSunny /> : <IoMoon />}
                  </IconButton>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* ===== HERO SECTION ===== */}
        <Box sx={styles.heroSection}>
          {/* Decorative background gradient */}
          <Box sx={styles.heroGradient}>
            <Box sx={styles.innerGradient}></Box>
          </Box>
          
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <MuiGrid container spacing={6} alignItems="center">
              {/* Left side - Text content */}
              <MuiGrid sx={{ mb: { xs: 4, md: 0 } }}>
                {/* Name and title */}
                <Typography 
                  variant="h2" 
                  component="h1" 
                  fontWeight="bold" 
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Hi, I&apos;m John Doe
                  {/* Job title with gradient effect */}
                  <Typography
                    variant="h2"
                    component="span"
                    fontWeight="bold"
                    color="primary"
                    display="block"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      lineHeight: 1.2,
                      background: 'linear-gradient(to right, #3a86ff, #ff006e)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Full Stack Developer
                  </Typography>
                </Typography>
                <Typography 
                  variant="h6" 
                  color="text.secondary" 
                  sx={{ fontSize: '1.1rem', mt: 3, mb: 4 }}
                >
                  I create sophisticated web applications that deliver exceptional
                  user experiences with modern technologies and clean code.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    variant="contained"
                    color="primary"
                    sx={{ 
                      px: 4, 
                      py: 1.5, 
                      borderRadius: 2,
                      background: 'linear-gradient(to right, #3a86ff, #5e60ce)',
                    }}
                  >
                    Get in Touch
                  </Button>
                  <Button
                    onClick={() => scrollToSection('projects')}
                    variant="outlined"
                    sx={{ px: 4, py: 1.5, borderRadius: 2 }}
                  >
                    View Work
                  </Button>
                </Box>
              </MuiGrid>
              {/* Right side - Profile image */}
              <MuiGrid sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 280, lg: 360 },
                    height: { xs: 280, lg: 360 },
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: styles.profileImage.border,
                    boxShadow: styles.profileImage.boxShadow,
                    mx: "auto",
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      padding: '6px',
                      background: 'linear-gradient(to right, #3a86ff, #ff006e)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }
                  }}
                >
                  {/* You can put a picture of yourself here, or keep it empty/remove the circle.  */}
                </Box>
              </MuiGrid>
            </MuiGrid>
          </Container>
        </Box>

        {/* ===== ABOUT SECTION ===== */}
        <Box 
          component="section" 
          id="about" 
          sx={{ 
            py: 12, 
            bgcolor: darkMode ? '#0a1929' : '#f8fafc',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative shape - circles */}
          <Box sx={styles.sectionShape} />
          
          <Container maxWidth="md" sx={styles.sectionContainer}>
            {/* Section title */}
            <Typography 
              variant="h3" 
              component="h2" 
              sx={styles.sectionTitle}
              data-aos="fade-up"
            >
              About Me
            </Typography>
            <Divider sx={styles.divider} />
            
            {/* About content - using Paper component for card effect */}
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                borderRadius: 4, 
                background: darkMode ? 'rgba(19, 47, 76, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
              }}
            >
              {/* About text content */}
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}
              >
                With over 5 years of experience in web development, I specialize in creating
                high-performance, responsive web applications using React, Next.js, and Node.js. My
                approach combines technical expertise with a strong focus on user experience and clean,
                maintainable code.
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}
              >
                Previously, I worked at XYZ Technologies where I led the frontend development team,
                improving application performance by 40% and implementing CI/CD pipelines that reduced
                deployment time by 65%. I&apos;m passionate about sharing knowledge and have contributed to
                several open-source projects.
              </Typography>
              
              {/* Resume download button */}
              <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  href="/resume.pdf"
                  target="_blank"
                  sx={{ 
                    background: 'linear-gradient(to right, #3a86ff, #5e60ce)',
                  }}
                >
                  Download Resume
                </Button>
              </Box>
            </Paper>
          </Container>
        </Box>

        {/* ===== PROJECTS SECTION ===== */}
        <Box 
          component="section" 
          id="projects" 
          sx={{ 
            py: 12, 
            bgcolor: darkMode ? '#132f4c' : '#ffffff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative shape - circles */}
          <Box 
            sx={{ 
              ...styles.sectionShape, 
              left: -100, 
              bottom: -150,
            }} 
          />
          
          <Container maxWidth="md" sx={styles.sectionContainer}>
            {/* Section title */}
            <Typography variant="h3" component="h2" sx={styles.sectionTitle}>
              Featured Projects
            </Typography>
            <Divider sx={styles.divider} />
            
            {/* Projects grid - using Card components */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {projectsData.map((project, index) => (
                <Card key={index} sx={styles.projectCard} elevation={darkMode ? 1 : 2}>
                  {/* Card content - title, description, technologies */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    
                    {/* Technology tags */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Box
                          key={techIndex}
                          component="span"
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            bgcolor: darkMode ? 'rgba(58, 134, 255, 0.15)' : '#eef6ff',
                            color: darkMode ? '#90caf9' : '#1565c0',
                            borderRadius: 10,
                            fontSize: '0.75rem',
                            fontWeight: 600,
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                  
                  {/* Card actions - buttons for code and demo */}
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      size="small" 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<FaGithub />}
                    >
                      Code
                    </Button>
                    <Button 
                      size="small" 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== SKILLS SECTION ===== */}
        <Box 
          component="section" 
          id="skills" 
          sx={{ 
            py: 12, 
            bgcolor: darkMode ? '#0a1929' : '#f8fafc',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative shape - circles */}
          <Box 
            sx={{ 
              ...styles.sectionShape, 
              top: -100, 
              right: '30%',
            }} 
          />
          
          <Container maxWidth="md" sx={styles.sectionContainer}>
            {/* Section title */}
            <Typography variant="h3" component="h2" sx={styles.sectionTitle}>
              Technical Skills
            </Typography>
            <Divider sx={styles.divider} />
            
            {/* Skills content - using Paper component for card effect */}
            <Paper 
              elevation={darkMode ? 1 : 3} 
              sx={{ 
                p: 4, 
                borderRadius: 4, 
                background: darkMode ? 'rgba(19, 47, 76, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
              }}
            >
              <MuiGrid container spacing={6}>
                {/* Left column - Frontend skills */}
                <MuiGrid>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    fontWeight="600" 
                    gutterBottom
                    sx={{ 
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      '&::before': {
                        content: '""',
                        display: 'inline-block',
                        width: 4,
                        height: 24,
                        borderRadius: 2,
                        backgroundColor: '#3a86ff',
                        marginRight: 2,
                      }
                    }}
                  >
                    Frontend Development
                  </Typography>
                  <Box sx={{ mb: 5 }}>
                    {frontendSkills.map((skill, index) => (
                      <Box key={index} sx={{ mb: 4 }}>
                        <Box sx={styles.skillLabel}>
                          <Typography 
                            variant="body1" 
                            color="text.primary"
                            fontWeight={500}
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </MuiGrid>
                
                {/* Right column - Backend skills */}
                <MuiGrid>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    fontWeight="600" 
                    gutterBottom
                    sx={{ 
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      '&::before': {
                        content: '""',
                        display: 'inline-block',
                        width: 4,
                        height: 24,
                        borderRadius: 2,
                        backgroundColor: '#ff006e',
                        marginRight: 2,
                      }
                    }}
                  >
                    Backend Development
                  </Typography>
                  
                  {/* Backend skills progress bars */}
                  <Box sx={{ mb: 5 }}>
                    {backendSkills.map((skill, index) => (
                      <Box key={index} sx={{ mb: 4 }}>
                        <Box sx={styles.skillLabel}>
                          <Typography 
                            variant="body1" 
                            color="text.primary"
                            fontWeight={500}
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </MuiGrid>
              </MuiGrid>
              
              {/* Other technologies section */}
              <Box sx={{ mt: 6 }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  fontWeight="600" 
                  gutterBottom
                  sx={{ 
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                      content: '""',
                      display: 'inline-block',
                      width: 4,
                      height: 24,
                      borderRadius: 2,
                      background: 'linear-gradient(to bottom, #3a86ff, #ff006e)',
                      marginRight: 2,
                    }
                  }}
                >
                  Other Technologies
                </Typography>
                
                {/* Technology tags */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {otherTechnologies.map((tech) => (
                    <Box 
                      key={tech} 
                      component="span" 
                      sx={{
                        ...styles.techTag,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          color: theme.palette.primary.main,
                          borderColor: theme.palette.primary.main,
                        }
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Container>
        </Box>

        {/* ===== CONTACT SECTION ===== */}
        <Box 
          component="section" 
          id="contact" 
          sx={{ 
            py: 12, 
            bgcolor: darkMode ? '#132f4c' : '#ffffff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative shape - circles */}
          <Box 
            sx={{ 
              ...styles.sectionShape, 
              bottom: '30%', 
              left: -100,
            }} 
          />
          
          <Container maxWidth="md" sx={styles.sectionContainer}>
            {/* Section title */}
            <Typography variant="h3" component="h2" sx={styles.sectionTitle}>
              Get In Touch
            </Typography>
            <Divider sx={styles.divider} />
            
            <MuiGrid container spacing={4}>
              {/* Left column - Contact information */}
              <MuiGrid>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 3 }}
                >
                  I&apos;m currently looking for new opportunities and freelance projects. If you&apos;d like to
                  discuss a potential collaboration or just want to say hi, feel free to reach out!
                </Typography>
                
                {/* Contact methods - email and social links */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {/* Email link */}
                  <Link 
                    href="mailto:john.doe@example.com" 
                    color="inherit"
                    underline="none"
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      transition: 'color 0.2s, transform 0.2s',
                      '&:hover': {
                        color: '#3a86ff',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    <HiOutlineMail style={{ marginRight: '0.5rem' }} />
                    john.doe@example.com
                  </Link>
                  
                  {/* Social media links */}
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton 
                      href="https://github.com/johndoe" 
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      size="small"
                      sx={{ 
                        transition: 'transform 0.2s, color 0.2s',
                        '&:hover': {
                          color: darkMode ? '#f0f6fc' : '#24292e',
                          transform: 'translateY(-3px)'
                        }
                      }}
                    >
                      <FaGithub />
                    </IconButton>
                    <IconButton 
                      href="https://linkedin.com/in/johndoe" 
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      size="small"
                      sx={{ 
                        transition: 'transform 0.2s, color 0.2s',
                        '&:hover': {
                          color: '#0a66c2',
                          transform: 'translateY(-3px)'
                        }
                      }}
                    >
                      <FaLinkedinIn />
                    </IconButton>
                    <IconButton 
                      href="https://twitter.com/johndoe" 
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      size="small"
                      sx={{ 
                        transition: 'transform 0.2s, color 0.2s',
                        '&:hover': {
                          color: '#1da1f2',
                          transform: 'translateY(-3px)'
                        }
                      }}
                    >
                      <FaTwitter />
                    </IconButton>
                  </Box>
                </Box>
              </MuiGrid>
              
              {/* Right column - Contact form */}
              <MuiGrid>
                <Paper 
                  elevation={darkMode ? 1 : 3} 
                  sx={{ 
                    p: 4, 
                    borderRadius: 3,
                    height: '100%',
                    backgroundColor: darkMode ? 'rgba(19, 47, 76, 0.5)' : 'rgba(255, 255, 255, 0.8)', 
                    backdropFilter: 'blur(10px)',
                    border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {/* Contact form - using TextField components */}
                  <Box component="form" sx={styles.contactForm}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      placeholder="Your name"
                      id="name"
                      InputProps={{
                        sx: {
                          borderRadius: 2,
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      placeholder="your.email@example.com"
                      id="email"
                      type="email"
                      InputProps={{
                        sx: {
                          borderRadius: 2,
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      placeholder="Your message..."
                      id="message"
                      multiline
                      rows={4}
                      InputProps={{
                        sx: {
                          borderRadius: 2,
                        }
                      }}
                    />
                    
                    {/* Submit button */}
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      sx={{ 
                        py: 1.5, 
                        borderRadius: 2,
                        background: 'linear-gradient(to right, #3a86ff, #5e60ce)',
                        boxShadow: '0 4px 14px rgba(58, 134, 255, 0.4)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(58, 134, 255, 0.6)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Paper>
              </MuiGrid>
            </MuiGrid>
          </Container>
        </Box>

        {/* ===== FOOTER ===== */}
        <Box
          component="footer"
          sx={{
            py: 4,
            bgcolor: darkMode ? '#0a1929' : '#f8fafc',
            borderTop: 1,
            borderColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                &copy; {new Date().getFullYear()} John Doe. All rights reserved.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 2, md: 0 } }}>
                Designed & Built with ❤️ using React & Material UI
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
