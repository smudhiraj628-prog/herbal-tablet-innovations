import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`mb-16 scroll-mt-8 ${className}`}>
      <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
        {title}
      </h2>
      <div className="section-content text-foreground">
        {children}
      </div>
    </section>
  );
};
