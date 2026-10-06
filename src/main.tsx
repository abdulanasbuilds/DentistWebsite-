import { StrictMode, useEffect, useState, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ChevronDown, Menu, MoveRight, Play, Plus, Star, X } from 'lucide-react';
import { siteConfig, type Version } from './config/site.config';
import './styles.css';

function App() {
  const [version, setVersion] = useState<Version>(() => (localStorage.getItem('dental-version') as Version) || 'one');
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => localStorage.setItem('dental-version', version), [version]);
  return <div className={`app version-${version}`}>
    <Header version={version} setVersion={(next) => { setVersion(next); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    {version === 'one' ? <VersionOne /> : <VersionTwo />}
  </div>;
}

function Header({ version, setVersion, menuOpen, setMenuOpen }: { version: Version; setVersion: (v: Version) => void; menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const config = siteConfig[version];
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="DentalOne home"><span className="tooth-mark">✦</span><span>{config.name}</span></a>
    <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
      {config.nav.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
      <div className="version-switch" aria-label="Website version selector">
        <button className={version === 'one' ? 'active' : ''} onClick={() => setVersion('one')}>V1</button>
        <button className={version === 'two' ? 'active' : ''} onClick={() => setVersion('two')}>V2</button>
      </div>
      <a className="nav-cta" href="#contact">{version === 'one' ? 'Contact us' : 'Get started free'} <ArrowUpRight size={16} /></a>
    </nav>
    <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
  </header>;
}

function Button({ children, dark = false }: { children: ReactNode; dark?: boolean }) { return <a className={`pill-button ${dark ? 'dark' : ''}`} href="#contact">{children}<span className="button-icon"><ArrowUpRight size={17} /></span></a>; }
function Eyebrow({ children }: { children: ReactNode }) { return <div className="eyebrow">{children}</div>; }
function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) { return <div className={`reveal ${className}`}>{children}</div>; }

function VersionOne() {
  const c = siteConfig.one;
  return <main className="v1-page">
    <section className="v1-hero" id="home"><div className="hero-grid"><div className="hero-copy"><Eyebrow>Trusted dental care</Eyebrow><h1>{c.heroTitle}</h1><p>{c.heroCopy}</p><Button>Book An Appointment</Button></div><div className="hero-art"><img src={c.heroImage} alt="Smiling patient receiving dental care" /></div></div><div className="hero-word">Dental <em>Care</em></div></section>
    <section className="v1-about section" id="about-us"><div className="section-label">About Us</div><div className="about-layout"><h2>We make every <em>smile</em> feel like home.</h2><div><p>{c.about}</p><div className="stats"><Stat value="10k+" label="Happy patients" /><Stat value="98%" label="Satisfaction rate" /><Stat value="4.9" label="Excellent reviews" /></div></div></div></section>
    <section className="v1-services section" id="services"><div className="section-heading"><div><div className="section-label">Services</div><h2>Advanced <em>oral health</em><br />treatment services</h2></div><p>Professional dental care using advanced techniques to maintain healthy, confident smiles always.</p></div><div className="service-grid">{c.services.map((s, i) => <Reveal className="v1-service-card" key={s.title}><img src={s.image} alt="" /><div className="card-overlay"><span>0{i + 1}</span><h3>{s.title}</h3><p>{s.copy}</p><MoveRight /></div></Reveal>)}</div></section>
    <section className="v1-problems section"><div className="section-heading"><div><div className="section-label">Causes</div><h2>Common <em>dental</em><br />problems</h2></div><div className="circle-note"><Play size={14} fill="currentColor" /> Learn about your smile</div></div><div className="problem-grid">{c.problems.map(([n, t, d]) => <div className="problem" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></section>
    <section className="v1-process section" id="blog"><div className="section-heading"><div><div className="section-label">Process</div><h2>Treatment <em>work</em><br />flow</h2></div><p>Our step-by-step approach helps patients receive accurate diagnoses, effective treatments, and lasting results.</p></div><div className="process-line">{c.process.map((item, i) => <div className="process-step" key={item}><span>0{i + 1}</span><h3>{item}</h3><p>{i === 0 ? 'Carefully examine teeth and gums to create the best treatment plan.' : i === 1 ? 'Remove plaque, stains, and bacteria for healthier teeth.' : 'Gentle, clear treatment for a confident, healthy smile.'}</p></div>)}</div></section>
    <section className="v1-transform section"><div className="section-heading"><div><div className="section-label">Transformations</div><h2>Incredible <em>smile</em><br />results</h2></div><p>Discover remarkable smile transformations with our gentle whitening treatments, delivering brighter teeth and renewed confidence.</p></div><div className="before-after"><figure><img src={c.services[1].image} alt="Before smile treatment" /><figcaption>Before <span>Yellow and stained teeth</span></figcaption></figure><div className="swap-circle">↔</div><figure><img src="/images/v1-transform-after.jpg" alt="After smile treatment" /><figcaption>After <span>Bright and confident smile</span></figcaption></figure></div></section>
    <section className="v1-testimonials section"><div className="section-heading"><div><div className="section-label">Testimonials</div><h2>Trusted feedback from <em>valued patients.</em></h2></div><p>Patient reviews show our gentle care, new tools, and great results.</p></div><div className="testimonial-grid">{c.testimonials.map(([name, quote]) => <article key={name}><div className="stars">★★★★★</div><p>“{quote}”</p><strong>{name}</strong><small>Happy patient</small></article>)}</div></section>
    <Footer version="one" />
  </main>;
}

function Stat({ value, label }: { value: string; label: string }) { return <div><strong>{value}</strong><span>{label}</span></div>; }

function VersionTwo() {
  const c = siteConfig.two;
  return <main className="v2-page">
    <section className="v2-hero" id="home"><div className="v2-hero-copy"><Eyebrow>Trusted Dental Care</Eyebrow><h1>{c.heroTitle}</h1><p>{c.heroCopy}</p><div className="hero-actions"><Button dark>Check Services</Button><Button>Book Appointments</Button></div><div className="hero-proof"><div className="avatar-stack"><span>SM</span><span>JA</span><span>EC</span></div><strong>10,000+</strong><small>Happy Smiles</small><span className="rating">★★★★★ <small>4.9/5 Stars</small></span></div></div><div className="v2-hero-image"><img src={c.heroImage} alt="DentalOne tooth illustration" /><div className="float-tag tag-one">✦ Modern Dentistry</div><div className="float-tag tag-two">✦ Easy Process</div></div></section>
    <section className="v2-intro section"><div className="intro-text"><Eyebrow>Trusted Dental Care</Eyebrow><h2>Modern dentistry,<br /><span>personal care,</span><br />a happier you.</h2><p>From routine checkups to advanced treatments, our services are designed around your comfort, health, and smile goals.</p><Button>Check Services</Button></div><div className="intro-image"><img src={c.introImage} alt="Dental care team" /><div className="intro-stat"><strong>12+</strong><span>Years of care</span></div></div></section>
    <section className="v2-services section" id="services"><div className="center-heading"><Eyebrow>Our Dental Services</Eyebrow><h2>Complete dental care for<br /><span>every stage</span> of your smile journey.</h2><p>{'From routine checkups to advanced treatments, our services are designed around your comfort, health, and smile goals.'}</p></div><div className="v2-service-grid">{c.services.map(([title, copy], i) => <article className="v2-service" key={title}><div className="service-number">0{i + 1}</div><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight /></article>)}</div></section>
    <section className="v2-steps section" id="process"><div className="center-heading"><Eyebrow>Simple Steps</Eyebrow><h2>Simple steps to a<br /><span>healthier smile.</span></h2><p>Getting the dental care you need is easy. From booking to treatment, we make every step simple and comfortable.</p></div><div className="steps-grid">{c.steps.map(([n, title, copy]) => <article key={n}><span>{n}</span><div className="step-visual"><div className="step-orb">{n === '01' ? '⌁' : n === '02' ? '◌' : '✦'}</div></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="v2-team section"><div className="team-intro"><Eyebrow>Meet Our Dental Team</Eyebrow><h2>Experienced professionals dedicated to <span>your smile.</span></h2><p>Experienced professionals dedicated to making every visit comfortable, personalized, and focused on your smile.</p></div><div className="team-grid">{c.team.map(([name, role, bio, image]) => <article key={name}><div className="team-image"><img src={image} alt={name} /></div><div className="team-meta"><h3>{name}</h3><p>{role}</p><button>About {name.split(' ')[1]} <ArrowUpRight size={15} /></button></div><div className="team-bio">{bio}</div></article>)}</div></section>
    <section className="v2-why section"><div><Eyebrow>Why Us</Eyebrow><h2>Expert care,<br /><span>comfortable experience.</span></h2></div><div className="why-list"><div><strong>Experienced Dental Team</strong><span>Care from people who listen.</span></div><div><strong>Modern Technology</strong><span>Thoughtful tools, better outcomes.</span></div><div><strong>Personalized Care</strong><span>A plan made for your smile.</span></div><div><strong>Complete Dental Care</strong><span>One trusted team, every step.</span></div></div></section>
    <section className="v2-faq section" id="faq"><div className="faq-title"><Eyebrow>Frequently Asked Questions</Eyebrow><h2>Answers to common <span>care questions.</span></h2></div><div className="faq-list">{c.faq.map(([q, a]) => <details key={q}><summary>{q}<Plus size={19} /></summary><p>{a}</p></details>)}</div></section>
    <Footer version="two" />
  </main>;
}

function Footer({ version }: { version: Version }) { const c = siteConfig[version]; return <footer className={`footer footer-${version}`} id="contact"><div className="footer-main"><div><a className="brand" href="#home"><span className="tooth-mark">✦</span><span>{c.name}</span></a><h2>{version === 'one' ? 'Your smile deserves\nthe best care.' : 'A healthier smile\nstarts here.'}</h2><Button dark>Get Appointment</Button></div><div className="contact-card"><Eyebrow>Contact</Eyebrow><a href={`tel:${siteConfig.shared.phone}`}>{siteConfig.shared.phone}</a><p>{siteConfig.shared.address}</p><div className="hours">{siteConfig.shared.hours.map((h) => <span key={h}>{h}</span>)}</div></div></div><div className="footer-bottom"><span>© 2026 {c.name}. All Rights Reserved.</span><span>Privacy Policy &nbsp; Terms of Use</span><span>Made with care for your smile.</span></div></footer>; }

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
