import { site } from "./site";
import { products, formatPrice } from "./products";

const D = site.domain;
const DESC = site.descriptor;
const PHONE = site.phone;
const EMAIL = site.email;
const STATE = site.governingState;

const productsAndPrices = products.map((p) => `${p.name} — ${formatPrice(p.priceUSD, "USD")}`);

export interface LegalBlock {
  h?: string;
  p?: string;
  list?: string[];
}

export interface LegalDoc {
  title: string;
  updated?: string;
  blocks: LegalBlock[];
}

export const legalDocs: Record<string, LegalDoc> = {
  "terms-conditions": {
    title: "Terms & Conditions",
    updated: "Effective Date: October 2026",
    blocks: [
      { p: `By placing an order on https://${D}, you agree to the Terms and Conditions described below. Please read carefully before purchase.` },
      { p: "Please note that this purchase is a one-time payment only. It does not renew automatically and does not constitute a subscription." },
      { h: "Products and Pricing", p: "The following products are available for one-time purchase on this website:", list: productsAndPrices },
      { p: "All prices are in U.S. dollars. Shipping is free within the United States. We currently ship to the United States only. Your card will be charged a single time for the amount shown at checkout." },
      { h: "Billing Descriptor", p: `Your credit card statement will show the following descriptor for your purchase: ${DESC}. This is how the charge will appear on the cardholder's billing statement.` },
      { h: "Payment Methods", p: "We accept Visa, Mastercard, and Discover only. Payment can only be made using a credit or debit card." },
      { h: "Health Disclaimer", p: "Products sold through this website have not been evaluated by the Food and Drug Administration. They are not intended to diagnose, treat, cure, or prevent any disease. Always consult your physician before use if you are pregnant, nursing, taking medication, or have a medical condition. Individual results may vary." },
      { h: "Shipping Policy", p: "Orders are processed within one to two (1–2) business days and typically arrive in 5–7 business days for U.S. shipments via USPS. Shipping is free." },
      { h: "Refund Policy", p: "To request a refund, contact customer service within 30 days of receiving your order to obtain an RMA number. Products must be returned (opened or unopened) within 30 days of receipt. Return shipping costs are the responsibility of the customer. Refunds are processed within 5–7 business days after inspection." },
      { h: "Return Address", p: "1175 Baker St, Costa Mesa, CA 92626, USA" },
      { h: "Contact", p: `${PHONE}\n${EMAIL}` },
      { h: "Disclaimer and Limitation of Liability", p: `All information on this website is for general informational purposes only and not a substitute for medical advice. https://${D} shall not be liable for indirect or consequential damages beyond the total purchase price of the order.` },
      { h: "Governing Terms", p: `We reserve the right to update these Terms at any time without prior notice. Continued use of this site implies acceptance of the current version. These Terms are governed by the laws of the State of ${STATE}, United States.` },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    updated: "Effective Date: October 2026",
    blocks: [
      { p: `This Privacy Policy explains how ${D} ("Website") collects, uses, and protects your information. By using the Website, you agree to this Policy. This Policy may be updated at any time; continued use means you accept the current version.` },
      { h: "Information We Collect", p: "You provide: name, email, phone, billing/shipping address, order details, payment info (processed by our payment partners), support messages.\nAutomatic data: IP address, device/browser, pages viewed, timestamps, referral URLs, and general location.\nCookies & similar tech: to operate the site, remember preferences, analyze traffic, and measure marketing." },
      { h: "How We Use Information", p: "Process and deliver orders, provide support, send service notices.\nImprove Website performance, prevent fraud, and secure transactions.\n(With your consent where required) send offers or updates. You can opt out anytime." },
      { h: "Sharing of Information", p: "Service providers: payment processing, fulfillment/shipping, email, analytics, customer support who act on our behalf.\nFraud prevention/Legal: to protect our rights, comply with law, or respond to lawful requests.\nWe never sell your personal information to third parties." },
      { h: "Cookies & Analytics", p: "We use cookies, pixels, and analytics tools to understand usage and improve performance. You can control cookies in your browser; some features may not function without them." },
      { h: "Marketing Preferences", p: "You can unsubscribe from marketing emails via the link in each message or by contacting us. If SMS is offered and you opt in, standard carrier rates apply; reply STOP to opt out." },
      { h: "Data Security & Retention", p: "We use reasonable administrative, technical, and physical safeguards. No method is 100% secure. We keep data only as long as necessary for the purposes described or as required by law." },
      { h: "Children's Privacy", p: "The Website is not intended for individuals under 18. We do not knowingly collect data from children under 16." },
      { h: "Your Rights (GDPR / CCPA)", p: "Depending on your location, you may request access, correction, deletion, or restriction of your personal information. EEA residents have rights under the GDPR; California residents have rights under the CCPA, including the right to know, delete, and opt out. We will verify and respond as required by applicable law. We never sell personal information to third parties." },
      { h: "International Transfers", p: "Your information may be processed in countries other than where you reside. By using the Website, you consent to such transfers subject to appropriate safeguards." },
      { h: "Contact", p: `Email: ${EMAIL}\nPhone: ${PHONE}` },
      { h: "Changes to this Policy", p: 'We may update this Policy periodically. The "Effective Date" reflects the latest version.' },
    ],
  },
  "return-policy": {
    title: "Return Policy",
    blocks: [
      { h: "How to Start a Return", p: `Contact Customer Support within 30 days of receiving your order:\nEmail: ${EMAIL}\nPhone: ${PHONE}` },
      { list: [
        "Request an RMA (Return Merchandise Authorization) number.",
        "You will receive a prepaid return label. Print and affix it to your package.",
        "Clearly write the RMA number on the outside of the package.",
        "Send the opened or unopened product back to the address below within 30 days of receipt.",
      ] },
      { h: "Return Address", p: "1175 Baker St, Costa Mesa, CA 92626, USA" },
      { h: "Refunds", list: [
        "Once received and verified, a refund will be issued to your original payment method.",
        "Refunds typically post within 3–5 business days, depending on your bank.",
      ] },
    ],
  },
  "refund-policy": {
    title: "Refund Policy",
    blocks: [
      { p: "We accept Visa, Mastercard, and Discover. Payment can only be made using a credit or debit card. Payment is deducted upon order confirmation, and you will not be charged an amount exceeding what you approved at checkout. This is a one-time purchase; there is no subscription and no recurring charge." },
      { p: "You are entitled to a 30-day refund policy. This period begins from the date you receive your order. You may return a product within 30 days of receiving it, provided it is in the same condition as received and in its original packaging." },
      { h: "If you wish to return one or more purchased products, please contact us:", p: `Phone: ${PHONE}\nEmail: ${EMAIL} (we reply within 24 hours)` },
      { h: "Return Address", p: "1175 Baker St, Costa Mesa, CA 92626, USA" },
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    blocks: [
      { h: "Where do you ship?", p: "We ship to the United States only. Shipping is free on every order." },
      { h: "When can I expect to receive my shipment?", p: "Orders are processed within 1–2 business days and typically arrive within 5–7 business days via USPS." },
      { h: "How can I track my order?", p: "A tracking number will be sent to you by email once your order has shipped." },
      { h: "How can I change my shipping address?", p: `Address changes are only accepted until 11:00 PM (PDT) on the same day the order is placed.\nPlease contact us at ${EMAIL} for assistance.` },
      { h: "Can I ship to a different address than my billing address?", p: "Yes, alternate delivery addresses are accepted." },
      { h: "How is my order shipped?", p: "Orders are shipped via USPS. Shipments are not dispatched on weekends or public holidays." },
    ],
  },
  "terms-of-purchase": {
    title: "Terms of Purchase",
    blocks: [
      { p: `These Terms of Purchase ("Terms") govern your purchases of products available through ${D} (the "Website"). By purchasing or using any product through this Website, you agree to these Terms as well as the Privacy Policy and Terms & Conditions available on the site.` },
      { p: "Please note that this purchase is a one-time payment only. It does not renew automatically and does not constitute a subscription." },
      { h: "General", p: "By placing an order, you confirm that you are at least 18 years of age, capable of entering into a legally binding agreement, and that all information you provide is accurate and complete. All purchases must comply with applicable laws and regulations." },
      { h: "Billing Descriptor", p: `Your credit card statement will show the descriptor: ${DESC}.` },
      { h: "Order Processing", p: "Orders are typically processed within 1–2 business days and shipped within 3–5 business days after confirmation via USPS. Shipping is free within the United States. In case of delays or stock shortages, you will be notified via email." },
      { h: "Product Descriptions", p: "We aim to provide accurate and updated product information, though descriptions may contain errors or inaccuracies. If you receive a product not as described, your sole remedy is to return it as outlined in the Refund Policy." },
      { h: "Pricing", p: "Prices are displayed in USD and may change without notice. Each product is a one-time purchase at the price shown at checkout. If a pricing error occurs, your order may be cancelled and you will be notified." },
      { h: "Payment Methods", p: "We accept Visa, Mastercard, and Discover only." },
      { h: "Dispute Resolution", p: `For any dispute, please contact our support team first:\nEmail: ${EMAIL}\nPhone: ${PHONE}\n\nWe will investigate and aim to resolve issues within 30 days. If resolution is not reached, you may escalate through an independent mediator or arbitration. All disputes will be handled confidentially and fairly, under the laws of the State of ${STATE}.` },
    ],
  },
};
