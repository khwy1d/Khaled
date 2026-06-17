import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function Projects() {
  const { language } = useLanguage();
  const projectsData = portfolioData.projects[language];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-3">
            {language === "ar" ? "أعمالي" : "Selected Work"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            {language === "ar" ? "المشاريع" : "Projects"}
          </h2>
          <div className="w-8 h-px mt-5" style={{ backgroundColor: "var(--accent)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative rounded-2xl border border-border p-7 lg:p-8 transition-colors hover:border-foreground/20 flex flex-col"
            >
              {/* top accent line — appears on hover, the section's quiet signature */}
              <span
                className="absolute top-0 left-7 right-7 h-[2px] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ backgroundColor: "var(--accent)" }}
              />

              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {project.title}
              </h3>

              <p className="text-sm lg:text-[15px] text-foreground/65 leading-relaxed mb-5">
                {project.description}
              </p>

              {project.note && (
                <p className="text-sm mb-5 font-medium" style={{ color: "var(--accent)" }}>
                  {project.note}
                </p>
              )}

              <p className="text-xs tracking-wide text-foreground/40 mb-6 mt-auto">
                {project.technologies.join(" · ")}
              </p>

              <div className="flex items-center gap-5 pt-5 border-t border-border">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2 text-sm font-medium text-foreground/75 hover:text-foreground"
                >
                  <Github className="w-4 h-4" />
                  {language === "ar" ? "الكود" : "Code"}
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-2 text-sm font-medium text-foreground/75 hover:text-foreground"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {language === "ar" ? "معاينة" : "Demo"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
