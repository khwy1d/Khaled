import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function WorkProcess() {
  const { language } = useLanguage();
  const steps = portfolioData.process[language];

  return (
    <section id="process" className="py-24 lg:py-32 bg-secondary/40 border-y border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-3">
            {language === "ar" ? "أسلوب العمل" : "Process"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            {language === "ar" ? "كيف أعمل" : "How I Work"}
          </h2>
          <div className="w-8 h-px mt-5" style={{ backgroundColor: "var(--accent)" }} />
        </motion.div>

        <div className="border-t border-border">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[4rem_minmax(0,14rem)_1fr] gap-x-6 sm:gap-x-10 gap-y-2 py-7 border-b border-border items-baseline"
            >
              <span
                className="font-display text-sm tracking-wide"
                style={{ color: "var(--accent)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="sm:contents">
                <h3 className="font-display text-lg font-medium text-foreground mb-1.5 sm:mb-0">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/60 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
