import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const sections = [
  { id: "title", label: "Title" },
  { id: "abstract", label: "Abstract" },
  { id: "introduction", label: "Introduction" },
  { id: "objectives", label: "Objectives" },
  { id: "literature", label: "Literature Review" },
  { id: "methodology", label: "Methodology" },
  { id: "formulation", label: "Formulation Chart" },
  { id: "evaluation", label: "Evaluation" },
  { id: "results", label: "Results & Discussion" },
  { id: "conclusion", label: "Conclusion" },
  { id: "future", label: "Future Scope" },
  { id: "references", label: "References" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("title");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const NavLinks = () => (
    <>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`block w-full text-left px-4 py-2 text-sm transition-colors rounded-md ${
            activeSection === section.id
              ? "bg-primary text-primary-foreground"
              : "hover:bg-secondary"
          }`}
        >
          {section.label}
        </button>
      ))}
    </>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-card border-r border-border p-6 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-6 text-primary">Contents</h2>
        <div className="space-y-1">
          <NavLinks />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 z-50 lg:hidden bg-background"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-6">
          <h2 className="text-lg font-semibold mb-6 text-primary">Contents</h2>
          <div className="space-y-1">
            <NavLinks />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
