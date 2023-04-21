import React from "react";
import Link from "next/link";
import { termContent2, termLinks2 } from "@/contents";
import { TermLink } from "@/contents/termsLinks";

export default function TermsAndCond() {
  return (
    <main className="container mx-auto py-10 px-4 min-h-screen">
      <section className="py-8 text-center">
        <h1 className="text-2xl md:text-5xl font-bold">Terms and Conditions</h1>
      </section>

      <section className="py-8">
        <div className="h-auto lg:pr-20 lg:float-left lg:w-1/2 xl:w-2/3">
          <p>
            Welcome to Truce, a decentralized peer-to-peer marketplace built on
            the Web3 technology. The following Terms and Conditions (the
            “Agreement”) govern your access to and use of the Truce platform,
            including all content, services, features, and functionality
            provided by Truce. By accessing or using the Truce platform, you
            agree to be bound by this Agreement. If you do not agree with any of
            the terms and conditions of this Agreement, please do not use the
            Truce platform.
          </p>
          <div className="py-8">
            {termContent2.map((content) => (
              <div className="py-8" key={content.id}>
                {" "}
                <Link
                  href={""}
                  id={content.id}
                  className="scroll-smooth break-all"
                >
                  <h3 className="text-base md:text-2xl font-semibold mb-4">
                    {content.caption}
                  </h3>
                </Link>
                <div>
                  <ul className="list-none list-inside pl-4 flex flex-col gap-2">
                    {content.subterms.map((point, index) => (
                      <li className="flex gap-2" key={point.number}>
                        <span className="font-semibold">{point.number}</span>
                        <span>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside
          className="fixed hidden float-right h-auto lg:block xl:w-auto"
          style={{ position: "fixed", right: "5%" }}
        >
          <section className="">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="list-decimal list-inside flex flex-col gap-4">
              {termLinks2.map((link: TermLink) => (
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
