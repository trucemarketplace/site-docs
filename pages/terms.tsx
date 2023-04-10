import React from "react";

export default function TermsAndCond() {
  return (
    <main className="container mx-auto py-10 px-4 min-h-screen">
      <section className="py-8 text-center">
        <h1 className="text-2xl md:text-5xl font-bold">Terms and Conditions</h1>
      </section>

      <section className="py-8">
        <div className="h-auto lg:pr-20 lg:float-left lg:w-1/2 xl:w-2/3">
          <h2 className="text-xl font-bold mb-4">Introduction:</h2>
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
          <ol className="list-decimal list-inside">
            <li>
              <a href="information-we-collect">Information We Collect</a>
              {/* <h2 className="text-xl font-bold mb-4">Information We Collect</h2> */}
            </li>
          </ol>
        </div>
        <aside className="sticky hidden float-right h-auto lg:block xl:w-auto">
          <section className="">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="list-decimal list-inside flex flex-col gap-4">
              {/* {privacyLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))} */}
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}
