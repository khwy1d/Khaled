import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { language } = useLanguage();
  const data = portfolioData.personal[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-foreground/50">
        <p>
          {language === "ar"
            ? `© ${currentYear} ${data.name}`
            : `© ${currentYear} ${data.name}`}
        </p>
        <a
          href={`mailto:${data.email}`}
          className="link-underline text-foreground/60 hover:text-foreground"
        >
          {data.email}
        </a>
      </div>
    </footer>
  );
}
