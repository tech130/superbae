import type { Metadata } from "next";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import Support from "@/components/support/Support";

export const metadata: Metadata = {
  title: "Support | SuperBae",
  description:
    "Find answers to common questions about the Superbae app or contact the Superbae support team.",
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <Support />
      <Footer />
    </>
  );
}
