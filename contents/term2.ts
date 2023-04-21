import { TermLink } from "./termsLinks";

type Term = {
  id: string;
  caption: string;
  subterms: Subterm[];
};

type Subterm = {
  number: string;
  text: string;
};

const termContent2: Term[] = [
  {
    id: "introduction",
    caption: "Introduction",
    subterms: [
      {
        number: "1.1",
        text: "Truce is a decentralized marketplace built on the Binance Smart Chain that allows buyers and sellers to trade goods and services without intermediaries.",
      },
      {
        number: "1.2",
        text: "These terms and conditions apply to all users of the Truce platform, including buyers and sellers.",
      },
      {
        number: "1.3",
        text: "By using our platform, you agree to comply with these terms and conditions, as well as any applicable laws and regulations.",
      },
    ],
  },
  {
    id: "user-accounts",
    caption: "User Accounts",
    subterms: [
      {
        number: "2.1",
        text: "In order to use the Truce platform, you must create a user account.",
      },
      {
        number: "2.2",
        text: "You agree to provide accurate and complete information when creating your user account.",
      },
      {
        number: "2.3",
        text: "You are responsible for maintaining the security of your user account, including your password.",
      },
      {
        number: "2.4",
        text: "You are solely responsible for any activity that occurs on your user account.",
      },
      {
        number: "2.5",
        text: "If you become aware of any unauthorized use of your user account, you must notify us immediately.",
      },
    ],
  },
  {
    id: "transactions",
    caption: "Transactions",
    subterms: [
      {
        number: "3.1",
        text: "All transactions on the Truce platform are conducted directly between buyers and sellers.",
      },
      {
        number: "3.2",
        text: "Truce does not act as an intermediary, and is not responsible for any transactions between buyers and sellers.",
      },
      {
        number: "3.3",
        text: "You agree to conduct all transactions on the Truce platform in good faith and in accordance with these terms and conditions.",
      },
      {
        number: "3.4",
        text: "Truce does not guarantee the quality, safety, or legality of any goods or services traded on the platform.",
      },
    ],
  },
  {
    id: "fees",
    caption: "Fees",
    subterms: [
      {
        number: "4.1",
        text: "Truce charges a transaction fee of 1% for all transactions conducted on the platform.",
      },
      {
        number: "4.2",
        text: "You agree to pay all transaction fees associated with your use of the Truce platform.",
      },
      {
        number: "4.3",
        text: "Truce reserves the right to change its transaction fee at any time.",
      },
    ],
  },
  {
    id: "prohibited-activities",
    caption: "Prohibited Activities",
    subterms: [
      {
        number: "5.1",
        text: "You agree not to use the Truce platform for any illegal or unauthorized purpose.",
      },
      {
        number: "5.2",
        text: "You agree not to use the Truce platform to transmit any material that is defamatory, obscene, or offensive.",
      },
      {
        number: "5.3",
        text: "You agree not to engage in any activity that could harm the Truce platform or its users.",
      },
    ],
  },
  {
    // Intellectual Property
    id: "intellectual-property",
    caption: "Intellectual Property",
    subterms: [
      {
        number: "6.1",
        text: "The Truce platform and all of its content, including but not limited to text, graphics, logos, and images, are the property of Truce.",
      },
      {
        number: "6.2",
        text: "You agree not to reproduce, distribute, or modify any content on the Truce platform without our prior written consent.",
      },
    ],
  },
  {
    // Limitation of Liability
    id: "limitation-of-liability",
    caption: "Limitation of Liability",
    subterms: [
      {
        number: "7.1",
        text: "Truce is not liable for any damages resulting from your use of the platform, including but not limited to lost profits, lost data, or any other consequential damages.",
      },
      {
        number: "7.2",
        text: "Truce is not responsible for any disputes between buyers and sellers that arise from their use of the platform.",
      },
    ],
  },
  {
    // Indemnification
    id: "indemnification",
    caption: "Indemnification",
    subterms: [
      {
        number: "8.1",
        text: "You agree to indemnify and hold Truce harmless from any claims, damages, or expenses arising from your use of the platform.",
      },
    ],
  },
  {
    // Termination
    id: "termination",
    caption: "Termination",
    subterms: [
      {
        number: "9.1",
        text: " Truce reserves the right to terminate your user account at any time for any reason.",
      },
      {
        number: "9.2",
        text: "You may terminate your user account at any time by contacting Truce customer support.",
      },
    ],
  },
  {
    // Governing Law
    id: "governing-law",
    caption: "Governing Law",
    subterms: [
      {
        number: "10.1",
        text: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Truce is registered.",
      },
    ],
  },
  {
    // Modifications
    id: "modifications",
    caption: "Modifications",
    subterms: [
      {
        number: "11.1",
        text: "Truce reserves the right to modify these terms and conditions at any time.",
      },
      {
        number: "11.2",
        text: "If we modify these terms and conditions, we will provide notice to users on our website or by email.",
      },
    ],
  },
  {
    // Contact Us
    id: "contact-us",
    caption: "Contact Us",
    subterms: [],
  },
];

const termLinks2: TermLink[] = [
  { id: "introduction", title: "Introduction", url: "#introduction" },
  { id: "user-accounts", title: "User Accounts", url: "#user-accounts" },
  { id: "transactions", title: "Transactions", url: "#transactions" },
  { id: "fees", title: "Fees", url: "#fees" },
  {
    id: "prohibited-activities",
    title: "Prohibited Activities",
    url: "#prohibited-activities",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    url: "#intellectual-property",
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    url: "#limitation-of-liability",
  },
  { id: "indemnification", title: "Indemnification", url: "#indemnification" },
  { id: "termination", title: "Termination", url: "#termination" },
  { id: "governing-law", title: "Governing Law", url: "#governing-law" },
  { id: "modifications", title: "Modifications", url: "#modifications" },
  { id: "contact-us", title: "Contact Us", url: "#contact-us" },
];

export { termContent2, termLinks2 };
