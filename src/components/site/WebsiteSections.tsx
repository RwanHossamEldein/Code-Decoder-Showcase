import { useState } from "react";
import { BrainCircuit, List, Zap, Play, Bug, Wrench, Check, Terminal, Clock, Database, FileCode, Image, Languages, Moon, User, ArrowDown, ArrowUpRight, Globe, BookOpen, History, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";
import { shots, webShots, markUrl, bannerUrl } from "@/lib/shots";
import { SectionHead, Reveal } from "./ui";
import { FeedbackForm } from "./FeedbackForm";

const icons = { brain: BrainCircuit, list: List, zap: Zap, play: Play, bug: Bug, wrench: Wrench, check: Check, terminal: Terminal, clock: Clock, database: Database, file: FileCode, image: Image, languages: Languages, moon: Moon, user: User };
const accents = ["text-primary", "text-accent", "text-primary", "text-accent", "text-primary", "text-accent"];

export function Cover() {
  const { t, lang } = useI18n();
  return <section id="home" className="cover relative isolate overflow-hidden border-b">
    <img src={bannerUrl} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-15" />
    <div className="cover-shade absolute inset-0 -z-10" />
    <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-14 pt-14 text-center sm:pb-16 sm:pt-20">
      <img src={markUrl} alt="CodeDecoder logo" width={112} height={112} className="cover-logo size-24 rounded-2xl sm:size-28" />
      <p className="mt-7 font-mono text-xs text-primary">{t.hero.eyebrow}</p>
      <h1 className="cover-enter mt-4 font-display text-5xl font-bold sm:text-7xl" dir="ltr">Code<span className="text-primary">Decoder</span></h1>
      <h2 className="mt-5 text-xl font-medium sm:text-3xl">{t.hero.title1} <span className="text-accent">{t.hero.title2}</span> {t.hero.title3}</h2>
      <p className="cover-enter cover-copy mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.hero.desc}</p>
      <div className="cover-enter cover-actions mt-7 flex flex-wrap justify-center gap-3">
        <Button size="lg" asChild className="h-12"><a href="https://codedecoder-landing-page.lovable.app" target="_blank" rel="noopener noreferrer"><Globe />{lang === "ar" ? "الموقع الإلكتروني" : "Visit website"}<ArrowUpRight /></a></Button>
        <Button size="lg" variant="outline" disabled className="h-12"><Play />{lang === "ar" ? "Play Store · قريبًا" : "Play Store · Coming soon"}</Button>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><Button size="lg" asChild className="h-12"><a href="#features">{t.hero.secondary}<ArrowDown /></a></Button><Button size="lg" variant="outline" asChild className="h-12"><a href="#showcase">{lang === "ar" ? "شاهد التطبيق" : "See the app"}<ArrowUpRight /></a></Button></div>
      <a href="#intro" className="scroll-cue mt-10 flex items-center gap-2 text-xs text-muted-foreground"><ArrowDown className="size-4" />{lang === "ar" ? "اكتشف المزيد" : "Discover more"}</a>
    </div>
  </section>;
}

export function IntroSection() {
  const { t } = useI18n();
  return <section id="intro" className="section-space border-b"><div className="section-inner grid gap-8 md:grid-cols-[1fr_1fr]"><SectionHead kicker={t.intro.kicker} title={t.intro.title} /><Reveal><p className="text-lg leading-loose text-muted-foreground">{t.intro.body}</p><div className="mt-6 flex flex-wrap gap-5 text-sm"><span className="flex items-center gap-2"><BrainCircuit className="size-4 text-primary" />AI</span><span className="flex items-center gap-2"><Languages className="size-4 text-accent" />English / العربية</span></div></Reveal></div></section>;
}

export function FeaturesSection() {
  const { t, lang } = useI18n();
  return <section id="features" className="section-space"><div className="section-inner"><SectionHead kicker={t.features.kicker} title={t.features.title} desc={t.features.desc} />
    <div className="mt-14 space-y-10">{t.features.groups.map((group, index) => <Reveal key={group.title} className="grid gap-6 border-t pt-8 md:grid-cols-[200px_1fr]"><div><p className="font-mono text-xs text-muted-foreground">0{index + 1}</p><h3 className={`mt-2 text-xl font-semibold ${accents[index]}`}>{group.title}</h3></div><div className="grid gap-4 sm:grid-cols-2">{group.items.map((feature) => { const Icon = icons[feature.icon as keyof typeof icons] ?? BrainCircuit; return <article key={feature.t} className="feature-item rounded-lg border bg-card/50 p-5"><Icon className={`size-6 ${accents[index]}`} /><h4 className="mt-4 text-lg font-semibold">{feature.t}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.d}</p></article>; })}</div></Reveal>)}</div>
    <Reveal className="mt-10 grid gap-4 border-t pt-8 sm:grid-cols-2"><article className="flex gap-4"><BookOpen className="mt-1 size-6 shrink-0 text-accent" /><div><h4 className="font-semibold">{lang === "ar" ? "مكتبة الخوارزميات" : "Algorithms library"}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.showcase.groups[2]?.shots[0]?.d}</p></div></article><article className="flex gap-4"><History className="mt-1 size-6 shrink-0 text-primary" /><div><h4 className="font-semibold">{lang === "ar" ? "سجل جلساتك" : "Your session history"}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.showcase.groups[3]?.shots[0]?.d}</p></div></article></Reveal>
  </div></section>;
}

export function HowSection() {
  const { t } = useI18n();
  return <section className="section-space border-y bg-card/40"><div className="section-inner"><SectionHead kicker={t.how.kicker} title={t.how.title} /><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{t.how.steps.map((step, i) => <Reveal key={step.t} delay={i * 60}><span className="font-mono text-3xl text-primary/60">0{i + 1}</span><h3 className="mt-4 text-lg font-semibold">{step.t}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p></Reveal>)}</div></div></section>;
}

export function ShowcaseSection() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<{ src: string; title: string } | null>(null);
  return <section id="showcase" className="section-space border-b"><div className="section-inner"><SectionHead kicker={t.showcase.kicker} title={t.showcase.title} desc={t.showcase.desc} />
    <Reveal className="mt-14"><h3 className="flex items-center gap-3 text-xl font-semibold"><Smartphone className="size-5 shrink-0 text-primary" />{t.showcase.phoneT}</h3><p className="mt-2 text-sm text-muted-foreground">{t.showcase.phoneD}</p></Reveal>
    <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">{t.showcase.groups.flatMap(group => group.shots).map((shot, i) => <Reveal key={shot.key} delay={i * 60}><Button variant="ghost" onClick={() => setSelected({ src: shots[shot.key], title: shot.t })} className="h-auto w-full overflow-hidden rounded-lg p-0 hover:bg-transparent" aria-label={`${t.showcase.view}: ${shot.t}`}><img src={shots[shot.key]} alt={shot.t} width={720} height={1280} loading="lazy" className="aspect-[9/16] w-full object-contain transition-transform duration-300 hover:scale-[1.02]" /></Button><h4 className="mt-5 text-lg font-semibold">{shot.t}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{shot.d}</p></Reveal>)}</div>
    <Reveal className="mt-16 border-t pt-10"><h3 className="flex items-center gap-3 text-xl font-semibold"><Monitor className="size-5 shrink-0 text-accent" />{t.showcase.webT}</h3><p className="mt-2 text-sm text-muted-foreground">{t.showcase.webD}</p></Reveal>
    <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2">{t.showcase.web.map((shot, i) => <Reveal key={shot.key} delay={i * 60}><Button variant="ghost" onClick={() => setSelected({ src: webShots[shot.key], title: shot.t })} className="h-auto w-full overflow-hidden rounded-lg border p-0 hover:bg-transparent" aria-label={`${t.showcase.view}: ${shot.t}`}><img src={webShots[shot.key]} alt={shot.t} width={1920} height={920} loading="lazy" className="aspect-[1920/920] w-full object-cover transition-transform duration-300 hover:scale-[1.02]" /></Button><h4 className="mt-5 text-lg font-semibold">{shot.t}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{shot.d}</p></Reveal>)}</div>
  </div><Dialog open={Boolean(selected)} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="max-w-4xl"><DialogTitle>{selected?.title}</DialogTitle>{selected && <img src={selected.src} alt={selected.title} className="mx-auto max-h-[75vh] w-auto object-contain" />}</DialogContent></Dialog></section>;
}

export function AboutSection() {
  const { t } = useI18n();
  return <section id="about" className="section-space border-b"><div className="section-inner"><div className="grid gap-10 md:grid-cols-2"><SectionHead kicker={t.about.kicker} title={t.about.title} desc={t.about.desc} /><Reveal><h3 className="text-xl font-semibold">{t.about.howT}</h3><p className="mt-4 leading-loose text-muted-foreground">{t.about.how}</p></Reveal></div><div className="mt-12 grid gap-10 md:grid-cols-2"><Reveal><h3 className="text-lg font-semibold">{t.about.goalsT}</h3><ul className="mt-5 space-y-4">{t.about.goals.map(item => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check className="size-4 shrink-0 text-primary" />{item}</li>)}</ul></Reveal><Reveal><h3 className="text-lg font-semibold">{t.about.usersT}</h3><ul className="mt-5 space-y-4">{t.about.users.map(item => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><User className="size-4 shrink-0 text-accent" />{item}</li>)}</ul></Reveal></div></div></section>;
}

export function ContactSection() {
  const { t, lang } = useI18n();
  return <section id="contact" className="section-space bg-card/40"><div className="section-inner grid gap-12 lg:grid-cols-[1fr_1.15fr]"><div><SectionHead kicker={t.contact.kicker} title={t.contact.title} desc={t.contact.desc} /><p className="mt-8 flex items-center gap-2 text-sm text-primary"><Check className="size-4" />{lang === "ar" ? "كل فكرة بتفرق." : "Every idea makes a difference."}</p></div><FeedbackForm /></div></section>;
}