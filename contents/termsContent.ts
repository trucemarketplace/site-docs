interface TermI {
  readonly id: string;
  caption: string;
  bullets: { heading?: string; terms: { number: string; desc: string }[] }[];
}

const termContent: TermI[] = [
  {
    id: "definitions",
    caption: "Definitions",
    bullets: [
      {
        heading: "In this Agreement, unless the context otherwise requires:",
        terms: [
          {
            number: "1.1",
            desc: "“Truce” refers to the Truce platform, including all content, services, features, and functionality provided by Truce.",
          },
          {
            number: "1.2",
            desc: "“User” means any person who accesses or uses the Truce platform.",
          },
          {
            number: "1.3",
            desc: "“Buyer” means a User who purchases goods or services through the Truce platform.",
          },
          {
            number: "1.4",
            desc: "“Seller” means a User who offers goods or services for sale through the Truce platform.",
          },
          {
            number: "1.5",
            desc: "“Listing” means a product or service offered for sale on the Truce platform.",
          },
          {
            number: "1.6",
            desc: "“Transaction” means the purchase and sale of goods or services between a Buyer and a Seller through the Truce platform.",
          },
        ],
      },
    ],
  },
  {
    // Eligibility:
    id: "eligibility",
    caption: "Eligibility",
    bullets: [
      {
        terms: [
          {
            number: "2.1",
            desc: "To use the Truce platform, you must be at least 18 years of age and have the capacity to enter into a binding contract under applicable law. By using the Truce platform, you represent and warrant that you meet these eligibility requirements.",
          },
          {
            number: "2.2",
            desc: "Truce reserves the right to refuse or revoke access to the Truce platform to anyone at any time and for any reason.",
          },
        ],
      },
    ],
  },
  {
    // User Conduct:
    id: "user-conduct",
    caption: "User Conduct",
    bullets: [
      {
        terms: [
          {
            number: "3.1",
            desc: "You agree to use the Truce platform in compliance with all applicable laws, rules, and regulations.",
          },
          {
            number: "3.2",
            desc: "You agree not to use the Truce platform for any unlawful or fraudulent activity, including but not limited to, money laundering, terrorist financing, or any other illegal activity.",
          },
          {
            number: "3.3",
            desc: "You agree not to engage in any activity that interferes with or disrupts the Truce platform or its servers, networks, or other infrastructure.",
          },
          {
            number: "3.4",
            desc: "You agree not to engage in any activity that could damage, disable, overburden, or impair the Truce platform or any other User’s use of the Truce platform.",
          },
          {
            number: "3.5",
            desc: "You agree not to use the Truce platform to harass, intimidate, threaten, or otherwise harm any other User.",
          },
          {
            number: "3.6",
            desc: "You agree not to use the Truce platform to distribute any spam, viruses, malware, or other harmful content.",
          },
        ],
      },
    ],
  },
  {
    // Truce Platform:
    id: "truce-platform",
    caption: "Truce Platform:",
    bullets: [
      {
        terms: [
          {
            number: "4.1",
            desc: "Truce is a decentralized peer-to-peer marketplace built on the Web3 technology. Truce does not take custody of any goods or services listed for sale on the Truce platform, nor does Truce handle any payment transactions between Buyers and Sellers.",
          },
          {
            number: "4.2",
            desc: "Truce is not responsible for any listings or transactions conducted on the Truce platform. Truce does not endorse any listings or guarantee the quality, safety, or legality of any goods or services offered for sale on the Truce platform.",
          },
          {
            number: "4.3",
            desc: "Users are solely responsible for their use of the Truce platform, including any listings or transactions conducted on the Truce platform.",
          },
          { number: "", desc: "" },
          { number: "", desc: "" },
        ],
      },
    ],
  },
  {
    // Transactions:
    id: "transactions",
    caption: "Transactions",
    bullets: [
      {
        terms: [
          {
            number: "5.1",
            desc: "Buyers and Sellers are solely responsible for their transactions on the Truce platform, including negotiating and agreeing to the terms of the transaction, arranging for the delivery of goods or services, and processing payments.",
          },
          {
            number: "5.2",
            desc: "Sellers must accurately describe the goods or services offered for sale on the Truce platform, including the price, condition, and any other relevant information.",
          },
          {
            number: "5.3",
            desc: "Buyers must carefully review the description of the goods or services offered for sale on the Truce platform before making a purchase.",
          },
        ],
      },
    ],
  },
  {
    //
    id: "",
    caption: "",
    bullets: [
      {
        terms: [
          { number: "", desc: "" },
          { number: "", desc: "" },
          { number: "", desc: "" },
          { number: "", desc: "" },
          { number: "", desc: "" },
        ],
      },
    ],
  },
];

export default termContent;
