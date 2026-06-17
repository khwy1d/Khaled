import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { language } = useLanguage();
  const data = portfolioData.personal[language];
  const education = portfolioData.education[language];
  const languages = portfolioData.languages[language];
  const certifications = portfolioData.certifications[language];
  // const stats = portfolioData.stats[language];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-3">
            {language === "ar" ? "نبذة" : "About"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            {language === "ar" ? "عني" : "About Me"}
          </h2>
          <div className="w-8 h-px mt-5" style={{ backgroundColor: "var(--accent)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              {data.bio.split("\n\n").map((p, i) => (
                <p key={i} className="text-base lg:text-lg text-foreground/75 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <a
              href={data.cv}
              download
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-border text-sm font-medium text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <Download className="w-4 h-4" />
              {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
            </a>

            {/*
              Stats (e.g. "+4 Completed Projects") were removed from the
              live design because two small numbers don't carry much
              weight visually — but the data is still in portfolio.ts
              under `stats`, ready to use. Uncomment to bring them back:

              <div className="grid grid-cols-2 gap-6 max-w-sm pt-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-semibold" style={{ color: "var(--accent)" }}>
                      +{s.value}
                    </p>
                    <p className="text-sm text-foreground/60 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            */}
          </motion.div>

          {/* Education, Languages, Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-4">
                {language === "ar" ? "التعليم" : "Education"}
              </h3>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <div key={i} className={i > 0 ? "pt-5 border-t border-border" : ""}>
                    <p className="font-medium text-foreground text-[15px]">{edu.degree}</p>
                    <p className="text-sm text-foreground/60 mt-1">{edu.school}</p>
                    <p className="text-sm mt-1" style={{ color: "var(--accent)" }}>{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-border">
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-4 mt-6">
                {language === "ar" ? "اللغات" : "Languages"}
              </h3>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-foreground/80">{lang.name}</span>
                    <span className="text-foreground/50">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-border">
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-4 mt-6">
                {language === "ar" ? "الشهادات" : "Certifications"}
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, i) => (
                  <p key={i} className="text-sm text-foreground/70">
                    {cert}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
