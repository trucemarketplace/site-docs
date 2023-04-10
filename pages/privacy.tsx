import React from "react";
import Link from "next/link";
import { privacyLinks, privacyContent } from "@/contents";

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto py-10 px-4 min-h-screen">
      <section className="py-8 text-center">
        <h1 className="text-2xl md:text-5xl font-bold">Privacy Policy</h1>
      </section>

      <section className="py-8">
        <div className="h-auto lg:pr-20 lg:float-left lg:w-1/2 xl:w-2/3">
          <p>
            This Privacy Policy describes how Truce (&ldquo;we&ldquo;,
            &ldquo;us&ldquo;, or &ldquo;our&ldquo;) collects, uses, and shares
            information in connection with our decentralized peer-to-peer (P2P)
            marketplace. By using Truce, you agree to the terms of this Privacy
            Policy.
          </p>
          <div className="py-8">
            {privacyContent.map((content) => (
              <div className="py-8" key={content.id}>
                <Link
                  href={""}
                  id={content.id}
                  className="scroll-smooth break-all"
                >
                  <h3 className="text-base md:text-2xl font-semibold mb-4">
                    {content.caption}
                  </h3>
                </Link>
                <p className="pb-2">{content.subheader}</p>
                {Array.isArray(content.bullet) ? (
                  <ul className="list-disc list-inside pl-4">
                    {content.bullet.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{content.bullet}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <aside className="sticky hidden float-right h-auto lg:block xl:w-auto">
          <section className="">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="list-decimal list-inside flex flex-col gap-4">
              {privacyLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}
