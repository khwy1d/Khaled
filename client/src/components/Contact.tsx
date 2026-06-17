import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";

export function Contact() {
  const { language } = useLanguage();
  const data = portfolioData.personal[language];
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const socials = [
    { icon: Github, href: data.github, label: "GitHub" },
    { icon: Linkedin, href: data.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: data.instagram, label: "Instagram" },
    { icon: Twitter, href: data.x, label: "X" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      language === "ar" ? "رسالة جديدة من موقعي" : "New Message from My Portfolio"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/40 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-3">
            {language === "ar" ? "تواصل" : "Get in Touch"}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            {language === "ar" ? "التواصل" : "Contact"}
          </h2>
          <div className="w-8 h-px mt-5" style={{ backgroundColor: "var(--accent)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
              {language === "ar"
                ? "أنا منفتح على المشاريع والتعاون وكل ما هو مثير للاهتمام."
                : "I'm open to projects, collaborations, and anything interesting."}
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-4 text-foreground/80 hover:text-foreground transition-colors group"
              >
                <Mail className="w-4 h-4 text-foreground/40 group-hover:text-foreground/70 transition-colors" />
                <span className="link-underline">{data.email}</span>
              </a>
              <div className="flex items-center gap-4 text-foreground/80">
                <MapPin className="w-4 h-4 text-foreground/40" />
                <span>{data.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-4">
                {language === "ar" ? "تابعني" : "Follow"}
              </p>
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

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-7"
          >
            <div>
              <label className="block text-sm text-foreground/60 mb-2">
                {language === "ar" ? "الاسم" : "Name"}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-foreground/50 outline-none py-2.5 text-foreground placeholder:text-foreground/30 transition-colors"
                placeholder={language === "ar" ? "اسمك" : "Your name"}
              />
            </div>

            <div>
              <label className="block text-sm text-foreground/60 mb-2">
                {language === "ar" ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-foreground/50 outline-none py-2.5 text-foreground placeholder:text-foreground/30 transition-colors"
                placeholder={language === "ar" ? "بريدك الإلكتروني" : "you@email.com"}
              />
            </div>

            <div>
              <label className="block text-sm text-foreground/60 mb-2">
                {language === "ar" ? "الرسالة" : "Message"}
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-foreground/50 outline-none py-2.5 text-foreground placeholder:text-foreground/30 transition-colors resize-none"
                placeholder={language === "ar" ? "رسالتك..." : "Your message..."}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-6 py-3.5 rounded-full font-medium text-sm text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {language === "ar" ? "إرسال الرسالة" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
