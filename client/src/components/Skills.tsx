import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const { language } = useLanguage();
  const skillsData = portfolioData.skills[language];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-3">
            {language === "ar" ? "الإمكانيات" : "Capabilities"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            {language === "ar" ? "المهارات" : "Skills"}
          </h2>
          <div className="w-8 h-px mt-5" style={{ backgroundColor: "var(--accent)" }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="pb-8 border-b border-border"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <h3 className="font-display text-base font-medium text-foreground">
                  {group.category}
                </h3>
              </div>
              <p className="text-foreground/60 text-[15px] leading-relaxed">
                {group.items.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
