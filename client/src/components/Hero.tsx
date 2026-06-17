import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { language } = useLanguage();
  const data = portfolioData.personal[language];
  const Arrow = language === "ar" ? ArrowLeft : ArrowRight;

  const socials = [
    { href: data.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: data.github, icon: Github, label: "GitHub" },
    { href: data.instagram, icon: Instagram, label: "Instagram" },
    { href: data.x, icon: Twitter, label: "X" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7"
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-foreground">
              {data.name}
            </h1>

            <p
              className="text-xl lg:text-2xl font-medium tracking-tight"
              style={{ color: "var(--accent)" }}
            >
              {data.title}
            </p>

            <p className="text-lg text-foreground/65 leading-relaxed max-w-md">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-sm text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {language === "ar" ? "عرض مشاريعي" : "View My Work"}
                <Arrow className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Portrait with the signature corner frame */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full max-w-[380px] mx-auto group">
              {/* offset flat block behind the photo — quiet depth, no blur, no motion */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl"
                style={{ backgroundColor: "var(--accent)", opacity: 0.12 }}
              />

              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="/Profil.png"
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* corner brackets — the one bold, deliberate element of this page */}
              {(
                [
                  ["-top-3", "-left-3", "border-t-2", "border-l-2"],
                  ["-top-3", "-right-3", "border-t-2", "border-r-2"],
                  ["-bottom-3", "-left-3", "border-b-2", "border-l-2"],
                  ["-bottom-3", "-right-3", "border-b-2", "border-r-2"],
                ] as const
              ).map(([v, h, bv, bh], i) => (
                <span
                  key={i}
                  className={`absolute ${v} ${h} w-9 h-9 ${bv} ${bh} rounded-[3px] transition-all duration-500 group-hover:scale-110 pointer-events-none`}
                  style={{ borderColor: "var(--accent)" }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
