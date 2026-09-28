interface Props {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}

const SectionHeading = ({ label, title, description, light, align = "center" }: Props) => (
  <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    {label && (
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
        {label}
      </span>
    )}
    <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-navy" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-navy/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
    <div className={`gold-divider${align === "left" ? "-left" : ""} mt-6`} />
  </div>
);

export default SectionHeading;
