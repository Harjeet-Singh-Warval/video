"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

function FadeInSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const testimonials = [
  {
    quote:
      "Exceptional speed and quality. Chotu delivers on point and without the hassle. Great work, mate!",
    name: "Edgar Marquez",
    role: "High-Ticket Sales",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "Highly responsive and accommodating. He ensures every edit is perfect. Great work!",
    name: "Dr. Arryn Gamble",
    role: "Neuro PT | Online Coach",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "I can always count on Chotu for good quality video editing. Highly recommended!",
    name: "Michael Drennon",
    role: "Founder/CEO Marketing Media AI",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
];

const FAQ_DATA = [
  {
    q: "What if I don't like the first edit?",
    a: "We offer unlimited revisions until you're 100% satisfied. Our process is designed to get your vision right from the start, but we'll keep refining until it's perfect.",
  },
  {
    q: "What if I need ongoing videos every week?",
    a: "We offer flexible subscription plans for creators who need consistent content. Our team can handle multiple videos per week with dedicated turnaround times.",
  },
  {
    q: "Do I own the rights to my videos?",
    a: "Absolutely! Once the project is complete and paid for, you own 100% of the rights to your content. Use it however you want, wherever you want.",
  },
  {
    q: "How do revisions work?",
    a: "Simply share your feedback via our project management tool. We typically turn around revisions within 24-48 hours, depending on complexity.",
  },
  {
    q: "Can you match a specific style?",
    a: "Yes! We can match any style you reference. Just share examples of creators or brands you admire, and our team will replicate that aesthetic.",
  },
  {
    q: "What's included in your packages?",
    a: "All packages include editing, color grading, sound design, motion graphics, and unlimited revisions. Premium packages add strategy calls and thumbnail design.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! We work with clients globally. Our team operates across multiple time zones to ensure smooth communication and delivery.",
  },
  {
    q: "Do you provide refunds?",
    a: "We offer a satisfaction guarantee. If we can't deliver what was agreed upon, we'll provide a full refund. Your investment is protected.",
  },
];

function StatCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Marquee() {
  const items = [
    { icon: "fa-brands fa-youtube", label: "Youtube Videos" },
    { icon: "fa-solid fa-ad", label: "Ad Creatives & VSL" },
    { icon: "fa-solid fa-microphone", label: "Podcast Editing" },
    { icon: "fa-solid fa-mobile-alt", label: "Short Form Content" },
    { icon: "fa-solid fa-paint-brush", label: "Graphic Design" },
  ];
  return (
    <motion.section
      className="services-marquee"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="marquee-track"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <div className="marquee-item" key={i}>
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMenuOpen(false);
    },
    []
  );

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={scrolled ? "scrolled" : ""}
    >
      <div className="nav-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="16"
                height="10"
                rx="2"
                fill="white"
                opacity="0.9"
              />
              <rect
                x="22"
                y="2"
                width="16"
                height="10"
                rx="2"
                fill="white"
                opacity="0.7"
              />
              <rect
                x="2"
                y="16"
                width="10"
                height="10"
                rx="2"
                fill="white"
                opacity="0.8"
              />
              <rect
                x="16"
                y="16"
                width="10"
                height="10"
                rx="2"
                fill="white"
                opacity="0.6"
              />
              <rect
                x="2"
                y="30"
                width="16"
                height="8"
                rx="2"
                fill="white"
                opacity="0.7"
              />
              <rect
                x="22"
                y="30"
                width="16"
                height="8"
                rx="2"
                fill="white"
                opacity="0.9"
              />
              <line
                x1="20"
                y1="2"
                x2="20"
                y2="38"
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
              <line
                x1="18"
                y1="2"
                x2="18"
                y2="38"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-brand">CHOTU</span>
            <span className="logo-tagline">Creative Video Editor & Designer</span>
          </div>
        </a>
        <ul className={`nav-links${menuOpen ? " active" : ""}`}>
          <li>
            <a href="#work" onClick={(e) => handleNavClick(e, "#work")}>
              Work
            </a>
          </li>
          <li>
            <a href="#process" onClick={(e) => handleNavClick(e, "#process")}>
              Process
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
            >
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          Let&apos;s Talk
        </a>
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-bg-glow"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Creative Video Editor &<br />
          <span className="gradient-text">Graphic Designer</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <strong>5+ Years of Professional Experience</strong> — Crafting
          scroll-stopping videos and visuals that build brands, captivate
          audiences, and drive real results.
        </motion.p>
        <motion.div
          className="hero-clients"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="avatar-stack">
            {[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="Client"
                whileHover={{ scale: 1.1, zIndex: 10 }}
              />
            ))}
          </div>
          <div className="client-text">
            <strong>Trusted by 150+</strong> Visionary Brands & Creators.
            <br />
            <span className="sub">The results that define our reputation</span>
          </div>
        </motion.div>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#work" className="btn-primary">
            <i className="fas fa-play"></i>
            Watch Demo
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
            <i
              className="fas fa-arrow-up-right-from-square"
              style={{ fontSize: "0.75rem" }}
            ></i>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-showcase"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="showcase-card"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="showcase-inner">
            <div className="showcase-title">
              Content That Grabs Attention & Drives Sales
            </div>
            <div className="showcase-video">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b869070f9279?w=900&h=500&fit=crop"
                alt="Video Editor"
              />
              <motion.div
                className="play-button"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(124, 58, 237, 0.4)",
                    "0 0 0 15px rgba(124, 58, 237, 0)",
                    "0 0 0 0 rgba(124, 58, 237, 0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <i className="fas fa-play"></i>
              </motion.div>
              <div className="floating-tags">
                {[
                  { icon: "fa-solid fa-bullseye", label: "Strategic Editing", cls: "purple" },
                  { icon: "fa-solid fa-bolt", label: "Scroll-Stopping Visuals", cls: "pink" },
                  { icon: "fa-solid fa-gem", label: "Clean & Premium Finish", cls: "blue" },
                  { icon: "fa-solid fa-stopwatch", label: "High Retention Flow", cls: "green" },
                ].map((tag, i) => (
                  <motion.div
                    key={i}
                    className="float-tag"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      delay: i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className={`tag-icon ${tag.cls}`}>
                      <i className={tag.icon}></i>
                    </div>
                    <span>{tag.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats-section">
      <h2 className="stats-heading">
        Tired of boring video content that don&apos;t stand out? It&apos;s time
        to upgrade the game with us!
      </h2>
      <div className="stats-grid">
        <FadeInSection className="stat-item">
          <div className="stat-number">
            <StatCounter target={200} suffix="%" />
          </div>
          <div className="stat-label">Engagement Surge</div>
        </FadeInSection>
        <FadeInSection className="stat-item" delay={0.1}>
          <div className="stat-number">
            <StatCounter target={5} suffix="x" />
          </div>
          <div className="stat-label">Organic Reach</div>
        </FadeInSection>
        <FadeInSection className="stat-item" delay={0.2}>
          <div className="stat-number">
            <StatCounter target={50} suffix="%" />
          </div>
          <div className="stat-label">Higher Conversion</div>
        </FadeInSection>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-label">Client Testimonials</div>
      <h2 className="section-title">
        <span className="light">See What Our</span>
        <br />
        Customers Have To Say
      </h2>
      <div className="testimonial-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="testimonial-video">
              <img src={testimonials[current].img} alt="Client" />
            </div>
            <p className="testimonial-quote">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <div className="testimonial-author">
              <img src={testimonials[current].img} alt="Author" />
              <div className="author-info">
                <div className="author-name">{testimonials[current].name}</div>
                <div className="author-role">{testimonials[current].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="slider-nav">
          <button
            className="slider-btn"
            onClick={() =>
              setCurrent(
                (c) => (c - 1 + testimonials.length) % testimonials.length
              )
            }
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="slider-btn"
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WORK_PROJECTS = [
  { category: "youtube", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=340&fit=crop", duration: "3:28", title: "YouTube Creator Spotlight" },
  { category: "youtube", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=340&fit=crop", duration: "5:12", title: "Brand Documentary" },
  { category: "shorts", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=340&fit=crop&crop=face", duration: "0:45", title: "Quick Fashion Reel" },
  { category: "shorts", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=340&fit=crop&crop=face", duration: "0:32", title: "Product Teaser" },
  { category: "shorts", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=340&fit=crop&crop=face", duration: "0:58", title: "Behind the Scenes" },
  { category: "saas", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=340&fit=crop", duration: "2:15", title: "SaaS Product Walkthrough" },
  { category: "saas", image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&h=340&fit=crop", duration: "1:48", title: "Software Demo" },
  { category: "ads", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=340&fit=crop", duration: "0:30", title: "Facebook Ad Creative" },
  { category: "ads", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=340&fit=crop", duration: "0:25", title: "Instagram VSL" },
  { category: "ads", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=340&fit=crop", duration: "0:35", title: "YouTube Ad Spot" },
];

function WorkSection() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="work" id="work">
      <div className="section-label">Work</div>
      <h2 className="section-title">
        <span className="light">Check Out Our</span>
        <br />
        Work
      </h2>
      <div className="work-tabs">
        {[
          { key: "all", label: "All Videos" },
          { key: "youtube", label: "YouTube Videos" },
          { key: "shorts", label: "Shorts" },
          { key: "saas", label: "SAAS Videos" },
          { key: "ads", label: "Ad Creatives & VSL" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`work-tab${filter === tab.key ? " active" : ""}`}
            onClick={() => setFilter(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="work-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={`${p.category}-${i}`}
              className="work-item"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <img src={p.image} alt={p.title} />
              <div className="work-play">
                <i className="fas fa-play"></i>
              </div>
              <div className="work-duration">{p.duration}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="comparison" id="comparison">
      <div className="section-label">Why Choose Me</div>
      <h2 className="section-title">
        <span className="light">See What Makes</span>
        <br />
        Us Different
      </h2>
      <div className="comparison-cards">
        <FadeInSection className="comparison-card editgen">
          <div className="comp-logo">
            <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="16" height="10" rx="2" fill="white" opacity="0.9"/>
              <rect x="22" y="2" width="16" height="10" rx="2" fill="white" opacity="0.7"/>
              <rect x="2" y="16" width="10" height="10" rx="2" fill="white" opacity="0.8"/>
              <rect x="16" y="16" width="10" height="10" rx="2" fill="white" opacity="0.6"/>
              <rect x="2" y="30" width="16" height="8" rx="2" fill="white" opacity="0.7"/>
              <rect x="22" y="30" width="16" height="8" rx="2" fill="white" opacity="0.9"/>
              <line x1="20" y1="2" x2="20" y2="38" stroke="white" strokeWidth="1.5" strokeDasharray="2 2"/>
              <text x="45" y="18" fill="white" fontFamily="Inter" fontWeight="800" fontSize="14">CHOTU</text>
              <text x="45" y="32" fill="#9ca3af" fontFamily="Inter" fontWeight="400" fontSize="8">Creative Video & Design</text>
            </svg>
          </div>
          <ul className="comp-list">
            {[
              "5+ Years of Professional Experience",
              "Lightning-Fast Delivery Without Compromise",
              "Unlimited Edits Until It's Perfect",
              "Video Editing + Graphic Design Under One Roof",
              "Obsessed with Results & Scalable Growth",
              "Around-the-Clock Support Whenever You Need a Win",
            ].map((item, i) => (
              <li key={i}>
                <i className="fas fa-check check"></i> {item}
              </li>
            ))}
          </ul>
          <div className="extra-mile">
            <h4>The &apos;Extra Mile&apos; Package:</h4>
            <ul>
              <li><i className="fas fa-check"></i> Free 60-Minute 1-on-1 Growth Deep-Dive</li>
              <li><i className="fas fa-check"></i> Access to our Private Resource Library</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection className="comparison-card" delay={0.2}>
          <div className="comp-title">The &apos;Typical&apos; Freelancer</div>
          <ul className="comp-list">
            {[
              "Flaky freelancers and missed deadlines",
              "Pretty designs that don't actually sell",
              "Nickel-and-diming you for every minor change",
              "Throwing darts in the dark without a plan",
              "Ghosting you when you need answers most",
            ].map((item, i) => (
              <li key={i}>
                <i className="fas fa-times cross"></i> {item}
              </li>
            ))}
          </ul>
        </FadeInSection>
      </div>
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <motion.a
          href="#contact"
          className="btn-primary"
          style={{ fontSize: "1rem", padding: "1rem 2rem" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book 15-Min Call
          <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: "0.75rem" }}></i>
        </motion.a>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="process" id="process">
      <div className="section-label">Our Process</div>
      <h2 className="section-title">
        <span className="light">Our Strategy To Get</span>
        <br />
        You leads with content
      </h2>
      <div className="process-timeline">
        <FadeInSection className="process-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <div className="step-badge">Creativity</div>
            <h3 className="step-title">Content Analysis</h3>
            <p className="step-desc">
              Spotting strengths, fixing flaws, and aligning your content with
              audience expectations.
            </p>
          </div>
          <div className="step-visual">
            <div className="niche-tags">
              <span className="niche-tag">Coaches</span>
              <span className="niche-tag">E-commerce</span>
              <span className="niche-tag">Personal Brand</span>
              <span className="niche-tag">Fashion</span>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection className="process-step" delay={0.1}>
          <div className="step-number">2</div>
          <div className="step-content">
            <div className="step-badge">Editing</div>
            <h3 className="step-title">Editing the Video</h3>
            <p className="step-desc">
              Using cutting-edge motion graphics, we create premium videos that
              make your message unforgettable.
            </p>
          </div>
          <div className="step-visual">
            <div
              style={{
                background: "linear-gradient(135deg, #1a1a2e, #0f0f0f)",
                borderRadius: 16,
                padding: "2rem",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  background: "#00005b",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  color: "#9999ff",
                  fontSize: "1.2rem",
                }}
              >
                Pr
              </div>
              <div
                style={{
                  width: 50,
                  height: 50,
                  background: "#1a1a1a",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  color: "#9999ff",
                  fontSize: "1.2rem",
                }}
              >
                Ae
              </div>
              <div
                style={{
                  width: "100%",
                  height: 60,
                  background: "#0a0a0a",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 1rem",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#ef4444",
                  }}
                ></div>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#f59e0b",
                  }}
                ></div>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                  }}
                ></div>
                <div
                  style={{
                    flex: 1,
                    height: 4,
                    background: "#333",
                    borderRadius: 2,
                    marginLeft: "1rem",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      width: "60%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, #7c3aed, #a78bfa)",
                      borderRadius: 2,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection className="process-step" delay={0.2}>
          <div className="step-number">3</div>
          <div className="step-content">
            <div className="step-badge">Thumbnail</div>
            <h3 className="step-title">Creating Thumbnail</h3>
            <p className="step-desc">
              We study top-performing thumbnails in your niche and replicate
              proven results.
            </p>
          </div>
          <div className="step-visual">
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <motion.div
                style={{
                  width: 120,
                  height: 80,
                  background: "linear-gradient(135deg, #ef4444, #b91c1c)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  color: "white",
                }}
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                CLICKBAIT THUMBNAIL
              </motion.div>
              <motion.div
                style={{
                  width: 120,
                  height: 80,
                  background: "linear-gradient(135deg, #22c55e, #15803d)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  color: "white",
                }}
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                STAYING AHEAD
              </motion.div>
            </div>
          </div>
        </FadeInSection>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <motion.a
          href="#contact"
          className="btn-primary"
          style={{ fontSize: "1rem", padding: "1rem 2rem" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book A 30-Min Call
          <i
            className="fas fa-arrow-up-right-from-square"
            style={{ fontSize: "0.75rem" }}
          ></i>
        </motion.a>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: "fa-solid fa-bullhorn", title: "Creatives & VSLs", desc: "High-response edits designed to stop the scroll and convert fast." },
    { icon: "fa-brands fa-youtube", title: "Youtube Videos", desc: "Long-form storytelling and channel content built to hold attention." },
    { icon: "fa-solid fa-desktop", title: "Demo Videos", desc: "Product walkthroughs that make your offer clear, credible, and easy to trust." },
    { icon: "fa-solid fa-cube", title: "SAAS Videos", desc: "Feature-led product videos that explain value quickly and drive action." },
    { icon: "fa-solid fa-podcast", title: "Podcasts", desc: "Conversation-first edits with polished audio and clip-ready social cutdowns." },
    { icon: "fa-solid fa-rocket", title: "Launch Videos", desc: "High-energy campaign assets built to create momentum around every release." },
    { icon: "fa-solid fa-paint-brush", title: "Graphic Design", desc: "Brand visuals, thumbnails, social graphics — professional design that stands out." },
    { icon: "fa-solid fa-mobile-alt", title: "Short Form Content", desc: "Reels, TikToks, and shorts optimized for viral reach and engagement." },
    { icon: "fa-solid fa-edit", title: "Full Edit Suite", desc: "End-to-end post production from raw footage to polished final cut." },
  ];

  return (
    <section className="services-grid-section" id="services">
      <div className="section-label">Services</div>
      <h2 className="section-title">
        <span className="light">Video Formats Built For</span>
        <br />
        every stage of growth
      </h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <FadeInSection key={i} className="service-card" delay={i * 0.05}>
            <motion.div
              className="service-icon-wrap"
              whileHover={{ scale: 1.1, background: "rgba(124, 58, 237, 0.15)" }}
            >
              <i className={s.icon}></i>
            </motion.div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

function CreatorsSection() {
  const creators = [
    { name: "Lucas Silva", niche: "Agency niche", stats: ["Generated 750k+ Views", "5k+ Leads"], img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=530&fit=crop&crop=face" },
    { name: "Zoe Carter", niche: "Art & Design niche", stats: ["Generated 1.8M+ Views", "22k+ Followers"], img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=530&fit=crop&crop=face" },
    { name: "Marcus Chen", niche: "Tech & SaaS niche", stats: ["Generated 2M+ Views", "15k+ Subscribers"], img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=530&fit=crop&crop=face" },
  ];

  return (
    <section className="creator-results" id="creators">
      <div className="section-label">Creator Results</div>
      <h2 className="section-title">
        <span className="light">Built To Scale</span>
        <br />
        Personal Brands
      </h2>
      <div className="creators-grid">
        {creators.map((c, i) => (
          <FadeInSection key={i} className="creator-card" delay={i * 0.1}>
            <img src={c.img} alt={c.name} />
            <motion.div
              className="creator-overlay"
              whileHover={{
                background:
                  "linear-gradient(to top, rgba(124, 58, 237, 0.4) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
              }}
            >
              <div className="creator-name">{c.name}</div>
              <div className="creator-niche">{c.niche}</div>
              <div className="creator-stats">
                {c.stats.map((stat, j) => (
                  <span key={j} className="creator-stat">
                    {stat}
                  </span>
                ))}
              </div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="booking" id="contact">
      <div className="section-label">Work With Me</div>
      <h2 className="section-title">
        <span className="light">Let&apos;s Level Up</span>
        <br />
        Your Brand!
      </h2>
      <motion.div
        className="booking-card"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="contact-info">
          <i
            className="fas fa-calendar-check"
            style={{
              fontSize: "3rem",
              color: "var(--accent-purple)",
              marginBottom: "0.5rem",
            }}
          ></i>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            Get In Touch
          </h3>
          <p style={{ color: "var(--text-gray)", marginBottom: "1rem" }}>
            Reach out directly via email, WhatsApp, or Instagram
          </p>
          <motion.a
            href="mailto:mdchotu2275@gmail.com"
            className="contact-item"
            whileHover={{ scale: 1.02 }}
          >
            <div className="contact-item-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-item-text">
              <div className="contact-item-label">Email</div>
              <div className="contact-item-value">mdchotu2275@gmail.com</div>
            </div>
          </motion.a>
          <motion.a
            href="https://wa.me/919934916135"
            target="_blank"
            className="contact-item"
            whileHover={{ scale: 1.02 }}
          >
            <div className="contact-item-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="contact-item-text">
              <div className="contact-item-label">WhatsApp</div>
              <div className="contact-item-value">+91 9934916135</div>
            </div>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/cho2_rio"
            target="_blank"
            className="contact-item"
            whileHover={{ scale: 1.02 }}
          >
            <div className="contact-item-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="contact-item-text">
              <div className="contact-item-label">Instagram</div>
              <div className="contact-item-value">@cho2_rio</div>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="section-label">FAQ</div>
      <h2 className="section-title">
        <span className="light">Questions You May</span>
        <br />
        ask
      </h2>
      <div className="faq-grid">
        {FAQ_DATA.map((faq, i) => (
          <motion.div
            key={i}
            className={`faq-item${openIndex === i ? " active" : ""}`}
            initial={false}
            whileHover={{ borderColor: "var(--border-hover)" }}
          >
            <div
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{faq.q}</span>
              <motion.div
                className="faq-icon"
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <i className="fas fa-chevron-down"></i>
              </motion.div>
            </div>
            <motion.div
              className="faq-answer"
              animate={{
                maxHeight: openIndex === i ? 200 : 0,
                padding: openIndex === i ? "0 1.5rem 1.25rem" : "0 1.5rem",
              }}
              transition={{ duration: 0.4 }}
            >
              <p>{faq.a}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="16" height="10" rx="2" fill="white" opacity="0.9"/>
                <rect x="22" y="2" width="16" height="10" rx="2" fill="white" opacity="0.7"/>
                <rect x="2" y="16" width="10" height="10" rx="2" fill="white" opacity="0.8"/>
                <rect x="16" y="16" width="10" height="10" rx="2" fill="white" opacity="0.6"/>
                <rect x="2" y="30" width="16" height="8" rx="2" fill="white" opacity="0.7"/>
                <rect x="22" y="30" width="16" height="8" rx="2" fill="white" opacity="0.9"/>
                <line x1="20" y1="2" x2="20" y2="38" stroke="white" strokeWidth="1.5" strokeDasharray="2 2"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-brand">CHOTU</span>
              <span className="logo-tagline">Creative Video Editor & Designer</span>
            </div>
          </a>
          <p>
            5+ years crafting scroll-stopping videos and brand visuals. Strategic
            creative, premium edits, and graphic design — all under one roof.
          </p>
        </div>
        <div className="footer-cta">
          <h3>Build a sharper digital presence.</h3>
          <div className="social-links">
            <motion.a
              href="https://www.instagram.com/cho2_rio"
              target="_blank"
              aria-label="Instagram"
              whileHover={{ scale: 1.1, background: "#7c3aed", color: "white" }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
            <motion.a
              href="https://wa.me/919934916135"
              target="_blank"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.1, background: "#7c3aed", color: "white" }}
            >
              <i className="fab fa-whatsapp"></i>
            </motion.a>
            <motion.a
              href="mailto:mdchotu2275@gmail.com"
              aria-label="Email"
              whileHover={{ scale: 1.1, background: "#7c3aed", color: "white" }}
            >
              <i className="fas fa-envelope"></i>
            </motion.a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Chotu Edits | All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <StatsSection />
      <TestimonialsSection />
      <WorkSection />
      <ComparisonSection />
      <ProcessSection />
      <ServicesSection />
      <CreatorsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </>
  );
}
