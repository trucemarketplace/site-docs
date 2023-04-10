interface PrivacyI {
  readonly id: string;
  caption: string;
  subheader: string;
  bullet?: string[] | string;
}

const privacyContent: PrivacyI[] = [
  {
    id: "information-we-collect",
    caption: "1. Information We Collect",
    subheader:
      "When you use Truce, we may collect certain information from or about you, including:",
    bullet: [
      "Personal information, such as your name, email address, and cryptocurrency wallet address.",
      "Transaction information, such as the type of cryptocurrency used for a transaction, the amount of cryptocurrency transferred, and the time and date of the transaction.",
      "Usage information, such as your IP address, browser type, and device type.",
      "User-generated content, such as listings, reviews, and messages.",
    ],
  },
  {
    id: "how-we-use-your-information",
    caption: "2. How We Use Your Information",
    subheader:
      "We may use the information we collect for the following purposes:",
    bullet: [
      "To provide and improve Truce, including to personalize your experience and to facilitate transactions.",
      "To communicate with you, including to respond to your inquiries and provide customer support.",
      "To analyze and understand how Truce is used, including to monitor and prevent fraud and abuse.",
      "To comply with legal obligations, including to respond to subpoenas and court orders.",
    ],
  },
  {
    id: "how-we-share-your-information",
    caption: "3. How We Share Your Information",
    subheader:
      "We may share your information with third parties for the following purposes:",
    bullet: [
      "To facilitate transactions between buyers and sellers, including to provide transaction information to the relevant parties.",
      "To provide customer support and resolve disputes, including to share information with our dispute resolution provider.",
      "With service providers who assist us in providing and improving Truce, such as hosting providers, analytics providers, and fraud detection providers.",
      "With law enforcement or other government agencies in response to a subpoena, court order, or other legal process.",
    ],
  },
  {
    id: "security",
    caption: "4. Security",
    subheader:
      "We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet, or method of electronic storage, is completely secure. Therefore, we cannot guarantee the absolute security of your information.",
  },
  {
    id: "data-retention",
    caption: "5. Data Retention",
    subheader:
      "We retain your information for as long as necessary to provide and improve Truce, to comply with legal obligations, and to resolve disputes.",
  },
  {
    id: "children",
    caption: "6. Children",
    subheader:
      "Truce is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under the age of 18.",
  },
  {
    id: "changes-to-this-privacy-policy",
    caption: "7. Changes to this Privacy Policy",
    subheader:
      "We may update this Privacy Policy from time to time. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on Truce.",
  },
  {
    id: "contact-us",
    caption: "8. Contact Us",
    subheader:
      "If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at privacy@truce.com.",
  },
];

export default privacyContent;
