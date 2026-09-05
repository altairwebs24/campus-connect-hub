import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Mail,
  Megaphone,
  Mic,
  CalendarDays,
  Trophy,
  Shirt,
  Store,
  Handshake,
  Sparkles,
} from "lucide-react";

import logoAsset from "../assets/logo.asset.json";
import heroVideoAsset from "../assets/hero-video.asset.json";
import eventVanAsset from "../assets/event-van.asset.json";
import eventInterviewAsset from "../assets/event-interview.asset.json";
import eventGroupAsset from "../assets/event-group.asset.json";
import eventMicAsset from "../assets/event-mic.asset.json";
import eventFrameAsset from "../assets/event-frame.asset.json";
import eventSignsAsset from "../assets/event-signs.asset.json";

const WHATSAPP = "https://wa.me/27707628520";
const EMAIL = "mailto:Info@nstcampusconnect.co.za";
const LINKTREE = "https://linktr.ee/nstcampusconnect";
const TIKTOK = "https://www.tiktok.com/@nst.campus.connect";
const INSTAGRAM = "https://www.instagram.com/nstcampusconnect";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NST Campus Connect — Student Media, Marketing & Events" },
      {
        name: "description",
        content:
          "NST Campus Connect is a student-focused media, marketing and events platform connecting UMP, TUT Mbombela, TVET Ehlanzeni, Eduvos and Rosebank across Nelspruit.",
      },
      {
        property: "og:title",
        content: "NST Campus Connect — Student Media, Marketing & Events",
      },
      {
        property: "og:description",
        content:
          "Connecting Nelspruit students, brands, businesses and opportunities through engaging content, strategic marketing and unforgettable experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Mic, label: "Student Media & Interviews" },
  { icon: Megaphone, label: "Campus Marketing & Brand Activations" },
  { icon: CalendarDays, label: "Events & Entertainment" },
  { icon: Trophy, label: "Sports & Tournaments" },
  { icon: Shirt, label: "Fashion & Student Culture" },
  { icon: Store, label: "Student Business Promotion" },
  { icon: Handshake, label: "Brand Partnerships & Campus Engagement" },
];

const campuses = [
  "UMP",
  "TUT Mbombela",
  "TVET Ehlanzeni",
  "Eduvos Mbombela",
  "Rosebank Mbombela",
];

const gallery = [
  { src: eventInterviewAsset.url, alt: "Street interview at a Nelspruit campus", span: "row-span-2" },
  { src: eventVanAsset.url, alt: "Students at the Campus SportsFest activation", span: "" },
  { src: eventMicAsset.url, alt: "NST Campus Connect microphone on the field", span: "" },
  { src: eventGroupAsset.url, alt: "Campus SportsFest crew group photo", span: "row-span-2" },
  { src: eventFrameAsset.url, alt: "Students posing with the SportsFest frame", span: "" },
  { src: eventSignsAsset.url, alt: "Students holding We Love Campus Sports Fest signs", span: "" },
];

const marqueeItems = ["Media", "Events", "Marketing", "Sports", "Culture", "Campus Life"];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="NST Campus Connect logo" className="h-10 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#spotlight" className="transition-colors hover:text-foreground">Spotlight</a>
          <a href="#gallery" className="transition-colors hover:text-foreground">In the Field</a>
          <a href="#connect" className="transition-colors hover:text-foreground">Connect</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src={heroVideoAsset.url}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32">
        <img
          src={logoAsset.url}
          alt="NST Campus Connect"
          className="animate-float-slow mb-8 h-24 w-auto md:h-32"
        />
        <h1 className="font-display text-[clamp(3rem,11vw,8.5rem)] leading-[0.92]">
          Campus
          <br />
          <span className="text-outline">Connect</span>
        </h1>
        <p className="font-serif-accent mt-6 max-w-xl text-xl text-muted-foreground md:text-2xl">
          the student-focused media, marketing &amp; events platform connecting
          campuses across Nelspruit.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {campuses.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-border bg-foreground py-4 text-background">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[...row, ...row].map((item, i) => (
          <span key={i} className="font-display flex items-center gap-8 text-2xl uppercase">
            {item}
            <Sparkles className="h-5 w-5" />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <p className="font-serif-accent text-xl text-muted-foreground">who we are</p>
      <h2 className="font-display mt-2 text-[clamp(3rem,9vw,7rem)] leading-[0.9]">
        About <span className="text-outline">Us</span>
      </h2>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 transition-transform hover:-translate-y-1">
          <h3 className="font-display text-2xl uppercase">Who we are?</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            NST Campus Connect is a student-focused media, marketing and events
            platform connecting campuses across Nelspruit. We exist to connect
            Nelspruit students, brands, businesses, institutions and
            opportunities through engaging content, strategic marketing and
            unforgettable experiences.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 transition-transform hover:-translate-y-1">
          <h3 className="font-display text-2xl uppercase">What we do</h3>
          <ul className="mt-4 space-y-3">
            {services.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-muted-foreground">
                <Icon className="h-4 w-4 shrink-0 text-foreground" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 transition-transform hover:-translate-y-1">
          <h3 className="font-display text-2xl uppercase">Our role</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We provide brands and businesses with a direct connection to the
            student market, helping them build awareness, engage students and
            create meaningful campus experiences. At the same time, we give
            students a platform to connect, express themselves, discover
            opportunities and experience campus life beyond the classroom.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 transition-transform hover:-translate-y-1">
          <h3 className="font-display text-2xl uppercase">Our vision</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            To become the brand students know and the platform institutions,
            brands and businesses trust to reach and engage the Nelspruit
            student community.
          </p>
        </div>
      </div>
    </section>
  );
}

function Spotlight() {
  return (
    <section id="spotlight" className="relative overflow-hidden border-y border-border bg-secondary/40">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
        <p className="font-serif-accent text-xl text-muted-foreground">every wednesday</p>
        <h2 className="font-display mt-2 max-w-4xl text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.92]">
          Campus Business <span className="text-outline">Spotlight</span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <p>
              NST Campus Connect invites student-owned businesses to advertise
              their business, <span className="font-semibold text-foreground">free of charge</span>,
              on our social media pages.
            </p>
            <p>
              We're creating a platform where student entrepreneurs can reach a
              wider student market across UMP, TUT Mbombela, TVET Ehlanzeni,
              Eduvos Mbombela and Rosebank Mbombela — gaining visibility,
              connecting with potential customers from 5 campuses and becoming
              part of the growing student community.
            </p>
            <p className="font-serif-accent text-2xl text-foreground">
              Your business deserves to be seen. Let's connect.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
              >
                WhatsApp 070 762 8520 <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={EMAIL}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-accent"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              { title: "Free of charge", text: "Student-owned businesses advertise on our pages at no cost." },
              { title: "5 campuses", text: "Reach the student market across Nelspruit's major campuses." },
              { title: "Weekly feature", text: "Every Wednesday we spotlight a student-owned business." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="flex items-start gap-5 rounded-3xl border border-border bg-card p-6"
              >
                <span className="font-display text-outline text-4xl">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg uppercase">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <p className="font-serif-accent text-xl text-muted-foreground">campus life, captured</p>
      <h2 className="font-display mt-2 text-[clamp(3rem,9vw,7rem)] leading-[0.9]">
        In the <span className="text-outline">Field</span>
      </h2>

      <div className="mt-14 grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-3">
        {gallery.map((img) => (
          <figure
            key={img.src}
            className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

function Connect() {
  const links = [
    { label: "Linktree", handle: "linktr.ee/nstcampusconnect", href: LINKTREE },
    { label: "TikTok", handle: "@nst.campus.connect", href: TIKTOK },
    { label: "Instagram", handle: "@nstcampusconnect", href: INSTAGRAM },
    { label: "WhatsApp", handle: "070 762 8520", href: WHATSAPP },
    { label: "Email", handle: "Info@nstcampusconnect.co.za", href: EMAIL },
  ];

  return (
    <footer id="connect" className="relative overflow-hidden border-t border-border">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 py-24">
        <p className="font-serif-accent text-xl text-muted-foreground">your campus. your people.</p>
        <h2 className="font-display mt-2 text-[clamp(3rem,10vw,8rem)] leading-[0.9]">
          Let's <span className="text-outline">Connect</span>
        </h2>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between py-5 transition-colors hover:bg-accent/50"
            >
              <div className="flex items-baseline gap-4 px-2">
                <span className="font-display text-2xl uppercase md:text-3xl">{link.label}</span>
                <span className="text-sm text-muted-foreground">{link.handle}</span>
              </div>
              <ArrowUpRight className="mr-2 h-6 w-6 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <img src={logoAsset.url} alt="NST Campus Connect" className="h-16 w-auto" />
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} NST Campus Connect — Nelspruit, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Spotlight />
        <Gallery />
        <Connect />
      </main>
    </div>
  );
}
