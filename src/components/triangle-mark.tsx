export type TriangleMarkVariant =
  | "explore"
  | "create"
  | "express"
  | "transition"
  | "combine"
  | "reflect"
  | "progress"
  | "boundary"
  | "mass"
  | "earth"
  | "fire"
  | "water"
  | "air"
  | "sky";

type TriangleMarkProps = {
  variant: TriangleMarkVariant;
  className?: string;
};

const triangle = "M48 5 92 88H4L48 5Z";

export function TriangleMark({ variant, className = "" }: TriangleMarkProps) {
  const commonProps = {
    className,
    viewBox: variant === "reflect" ? "0 0 96 64" : "0 0 96 96",
    fill: "none",
    "aria-hidden": true,
    focusable: false,
  } as const;

  switch (variant) {
    case "explore":
      return <svg {...commonProps}><path d={triangle} /><path d="M26 46h44" /></svg>;
    case "create":
      return <svg {...commonProps}><path d={triangle} /><path d="M25 49h46M48 49v39" /></svg>;
    case "express":
      return <svg {...commonProps}><path d={triangle} /><path d="M34 31 65 88M21 55l18 33" /></svg>;
    case "transition":
      return <svg {...commonProps}><path d={triangle} /><path d="m28 43 20 45 21-45" /></svg>;
    case "combine":
      return <svg {...commonProps}><path d={triangle} /><path d="m29 88 19-36 19 36" /></svg>;
    case "reflect":
      return <svg {...commonProps}><path d="M4 8v48l44-24L4 8ZM92 8v48L48 32 92 8Z" /></svg>;
    case "progress":
      return <svg {...commonProps}><path d={triangle} /><circle cx="36" cy="59" r="3.5" fill="currentColor" stroke="none" /><circle cx="48" cy="59" r="3.5" fill="currentColor" stroke="none" /><circle cx="60" cy="59" r="3.5" fill="currentColor" stroke="none" /></svg>;
    case "boundary":
      return <svg {...commonProps}><path d={triangle} /><circle cx="48" cy="74" r="11" /></svg>;
    case "mass":
      return <svg {...commonProps}><path d={triangle} /><circle cx="48" cy="66" r="10" fill="currentColor" stroke="none" /></svg>;
    case "earth":
      return <svg {...commonProps}><path d="M4 8h88L48 88 4 8Z" /><path d="M14 26h68" /></svg>;
    case "fire":
      return <svg {...commonProps}><path d={triangle} /></svg>;
    case "water":
      return <svg {...commonProps}><path d="M4 8h88L48 88 4 8Z" /></svg>;
    case "air":
      return <svg {...commonProps}><path d={triangle} /><path d="M15 68h66" /></svg>;
    case "sky":
      return <svg {...commonProps}><path d="M48 5 92 78H4L48 5Z" /><path d="M4 25h88L48 91 4 25Z" /></svg>;
  }
}

const elements: { variant: TriangleMarkVariant; label: string }[] = [
  { variant: "earth", label: "Earth" },
  { variant: "fire", label: "Fire" },
  { variant: "water", label: "Water" },
  { variant: "air", label: "Air" },
  { variant: "sky", label: "Sky" },
];

export function ElementMarks({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="element-mark-list">
        {elements.map(({ variant, label }) => (
          <div className="element-mark-item" key={variant}>
            <TriangleMark variant={variant} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="element-mark-statement">
        We, the particle of this Universe,<br />
        Let eternal elements<br />
        Be the part of great work.
      </p>
    </div>
  );
}
