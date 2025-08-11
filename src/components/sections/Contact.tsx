import { Card, CardContent } from "../ui/card";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

// Contact component displays personal contact details with icons and links.
// Utilises TailwindCSS utility classes for modern styling and ensures accessibility.
const Contact = () => {
  // List of contact details to render in the UI.
  // Each entry consists of:
  // - label: the type of contact (e.g., Email)
  // - value: the display text for the contact detail
  // - icon: the icon component to visually represent the contact method
  // - href: a hyperlink destination (null for non-link items)
  const contactInfo = [
    {
      label: "Email",
      value: "rismart1221@outlook.com",
      icon: Mail,
      href: "mailto:rismart1221@outlook.com"
    },
    {
      label: "LinkedIn",
      value: "www.linkedin.com/in/michael-smart-47576a264/",
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/michael-smart-47576a264/"
    },
    {
      label: "GitHub",
      value: "github.com/riiansmart",
      icon: SiGithub,
      href: "https://github.com/riiansmart"
    },
    {
      label: "Location",
      value: "Glendale, Arizona, USA",
      icon: MapPin,
      href: null
    }
  ];

  return (
    <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black dark:border-white/20 rounded-2xl shadow-lg max-w-md mx-auto">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md bg-black text-white dark:bg-white dark:text-black">
            <MessageCircle className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-bold text-black dark:text-white">Get In Touch</h3>
        </div>
        
        <p className="text-sm text-black/80 dark:text-white/80 mb-6">
          I'm always open to discussing new opportunities or collaborations. Feel free to reach out!
        </p>
        
        <div className="space-y-4 w-full">
          {contactInfo.map((contact) => {
            const IconComponent = contact.icon;
            
            // Unified monochrome style for all icons
            const iconContainerStyle = "w-8 h-8 rounded-lg flex items-center justify-center shadow-md bg-black text-white dark:bg-white dark:text-black";

            return (
              <div key={contact.label} className="flex flex-col items-center gap-1 group">
                <div className={`${iconContainerStyle} transition-transform duration-200 group-hover:scale-110`}>
                  <IconComponent className="size-4" />
                </div>
                <div className="text-center">
                <p className="text-xs text-black/60 dark:text-white/60 uppercase tracking-wide font-medium">
                  {contact.label}
                </p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-sm text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-sm text-black dark:text-white">
                    {contact.value}
                  </p>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact; 