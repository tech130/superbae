import type { ReactNode } from "react";
import "./legal.css";

type LegalDocumentProps = {
  title: string;
  effectiveDate: string;
  children: ReactNode;
};

export default function LegalDocument({
  title,
  effectiveDate,
  children,
}: LegalDocumentProps) {
  return (
    <main className="legal-document">
      <article className="legal-document__content">
        <h1>{title}</h1>
        <p className="legal-document__effective">Effective: {effectiveDate}</p>
        {children}
      </article>
    </main>
  );
}
