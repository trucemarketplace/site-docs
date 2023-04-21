export interface TermLink {
  readonly id: string;
  title: string;
  url: string;
}

const termLinks: TermLink[] = [
  { id: "introduction", title: "Introduction", url: "#introduction" },
  { id: "definitions", title: "Definitions", url: "#definitions" },
  { id: "eligibility", title: "Eligibility", url: "#eligibility" },
  { id: "user-conduct", title: "User Conduct", url: "#user-conduct" },
  { id: "truce-platform", title: "Truce Platform", url: "#truce-platform" },
  {
    id: "transactions",
    title: "Transactions",
    url: "#transactions",
  },
  {
    id: "disputes",
    title: "Disputes",
    url: "#disputes",
  },
  {
    id: "prohibited-items",
    title: "Prohibited Items",
    url: "#prohibited-items",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    url: "#intellectual-property",
  },
  {
    id: "privacy",
    title: "Privacy",
    url: "#privacy",
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    url: "#limitation-of-liability",
  },
  {
    id: "governing-law-and-dispute-resolution",
    title: "Governing Law and Dispute Resolution",
    url: "#governing-law-and-dispute-resolution",
  },
  {
    id: "changes-to-the-terms",
    title: "Changes to the Terms",
    url: "#changes-to-the-terms",
  },

  {
    id: "miscellaneous",
    title: "Miscellaneous",
    url: "#miscellaneous",
  },
];

export default termLinks;
