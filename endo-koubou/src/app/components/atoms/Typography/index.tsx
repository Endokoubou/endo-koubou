import React from "react";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: React.ReactNode;
};

export function Typography({ variant, children }: TypographyProps) {
  switch (variant) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "p":
      return <p>{children}</p>;
    case "span":
      return <span>{children}</span>;
    default:
      return <span>{children}</span>;
  }
}
