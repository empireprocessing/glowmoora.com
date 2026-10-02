import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products, formatPrice } from "../data/products";
import { site } from "../data/site";
import { VisaIcon, MastercardIcon, DiscoverIcon, CvcIcon } from "../components/PaymentIcons";

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.16em] text-[#6b5a52] mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full border border-[#e4d4cb] rounded-lg px-4 py-2.5 bg-cream focus:outline-none focus:border-blush-400"
      />
    </div>
  );
}

function AddressBlock({ prefix }: { prefix: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Field label="First name" name={`${prefix}-first`} required autoComplete="given-name" />
      <Field label="Last name" name={`${prefix}-last`} required autoComplete="family-name" />
      <div className="sm:col-span-2">
        <Field label="Address" name={`${prefix}-address`} required autoComplete="street-address" />
      </div>
      <div className="sm:col-span-2">
        <Field label="Apartment, suite, etc. (optional)" name={`${prefix}-address2`} />
      </div>
      <Field label="City" name={`${prefix}-city`} required autoComplete="address-level2" />
      <Field label="State" name={`${prefix}-state`} required autoComplete="address-level1" />
      <Field label="ZIP code" name={`${prefix}-zip`} required autoComplete="postal-code" />
      <div>
        <label className="block text-xs uppercase tracking-[0.16em] text-[#6b5a52] mb-1.5">Country</label>
        <select
          name={`${prefix}-country`}
          className="w-full border border-[#e4d4cb] rounded-lg px-4 py-2.5 bg-cream focus:outline-none focus:border-blush-400"
          defaultValue="United States"
        >
          <option value="United States">United States</option>
        </select>
      </div>
    </div>
  );
}

export default function Checkout() {
  const navigate = useNavigate();
  const { items, currency, subtotalUSD, subtotalEUR, clear } = useCart();
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [placed, setPlaced] = useState(false);

  const subtotal = currency === "USD" ? subtotalUSD : subtotalEUR;
  const rows = items
    .map((it) => ({ item: it, product: products.find((p) => p.slug === it.slug)! }))
    .filter((r) => r.product);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setPlaced(true);
    clear();
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  if (placed) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-28 text-center">
        <div className="w-16 h-16 rounded-full bg-blush-50 flex items-center justify-center mx-auto mb-6">
          <Check size={30} className="text-blush-500" />
        </div>
        <h1 className="font-serif text-4xl text-[#5C4D47]">Thank you for your order</h1>
        <p className="text-[#8a776d] mt-4 leading-relaxed">
          A confirmation has been sent to your email. Your order will be processed within 1–2 business days and
          shipped via USPS. Your card will show the descriptor <strong>{site.descriptor}</strong>.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="mt-8 bg-blush-500 text-white text-sm uppercase tracking-[0.22em] px-9 py-3.5 rounded-full hover:bg-blush-600 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-28 text-center">
        <h1 className="font-serif text-3xl text-[#5C4D47]">Your cart is empty</h1>
        <button
          onClick={() => navigate("/shop")}
          className="mt-6 bg-blush-500 text-white text-sm uppercase tracking-[0.22em] px-9 py-3.5 rounded-full hover:bg-blush-600 transition-colors"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl text-[#5C4D47] mb-10">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left: fields */}
        <div className="lg:col-span-3 space-y-10">
          {/* Contact */}
          <section>
            <h2 className="font-serif text-2xl text-[#5C4D47] mb-4">Contact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Field label="Email" type="email" name="email" required autoComplete="email" />
              </div>
              <div className="sm:col-span-2">
                <Field label="Phone" type="tel" name="phone" required autoComplete="tel" />
              </div>
            </div>
          </section>

          {/* Billing */}
          <section>
            <h2 className="font-serif text-2xl text-[#5C4D47] mb-4">Billing Address</h2>
            <AddressBlock prefix="billing" />
          </section>

          {/* Delivery */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-2xl text-[#5C4D47]">Delivery Address</h2>
            </div>
            <label className="flex items-center gap-3 mb-5 cursor-pointer">
              <input
                type="checkbox"
                checked={sameAsBilling}
                onChange={(e) => setSameAsBilling(e.target.checked)}
                className="w-4 h-4 accent-blush-500"
              />
              <span className="text-sm text-[#6b5a52]">Same as billing address</span>
            </label>
            {!sameAsBilling && <AddressBlock prefix="delivery" />}
          </section>

          {/* Payment */}
          <section>
            <h2 className="font-serif text-2xl text-[#5C4D47] mb-2">Payment</h2>
            <p className="text-sm text-[#6b5a52] mb-4">
              Billed as <span className="font-medium text-[#5C4D47]">{site.descriptor}</span>
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-[#6b5a52] mb-1.5">Card number</label>
                <div className="relative">
                  <input
                    name="card"
                    required
                    inputMode="numeric"
                    placeholder="1234 5678 9012 3456"
                    className="w-full border border-[#e4d4cb] rounded-lg px-4 py-2.5 pr-36 bg-cream focus:outline-none focus:border-blush-400"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                    <VisaIcon width={40} height={25} />
                    <MastercardIcon width={40} height={25} />
                    <DiscoverIcon width={40} height={25} />
                  </div>
                </div>
              </div>
              <div>
                <Field label="Name on card" name="card-name" required autoComplete="cc-name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Expiration (MM/YY)" name="exp" required placeholder="MM/YY" autoComplete="cc-exp" />
                <div>
                  <label className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#6b5a52] mb-1.5">
                    Security code (CVC) <CvcIcon />
                  </label>
                  <input
                    name="cvc"
                    required
                    inputMode="numeric"
                    placeholder="123"
                    className="w-full border border-[#e4d4cb] rounded-lg px-4 py-2.5 bg-cream focus:outline-none focus:border-blush-400"
                  />
                </div>
              </div>
            </div>
            <p className="flex items-center gap-2 text-xs text-[#8a776d] mt-4">
              <Lock size={13} className="text-blush-500" />
              Your payment information is encrypted and secure. We never store your card details.
            </p>
          </section>
        </div>

        {/* Right: summary */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-[#f1e6df] p-6 sticky top-28">
            <h2 className="font-serif text-2xl text-[#5C4D47] mb-5">Order Summary</h2>
            <div className="space-y-4 mb-5">
              {rows.map(({ item, product }) => {
                const price = currency === "USD" ? product.priceUSD : product.priceEUR;
                return (
                  <div key={item.slug} className="flex gap-3">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-[#f9f1ec] shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-1.5 -right-1.5 bg-blush-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                        {item.qty}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-[#5C4D47] truncate">{product.name}</div>
                      <div className="text-xs text-[#a3938a]">{product.format}</div>
                    </div>
                    <div className="text-sm text-[#5C4D47]">{formatPrice(price * item.qty, currency)}</div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-[#f1e6df] pt-4 space-y-2.5 text-sm">
              <div className="flex justify-between text-[#6b5a52]">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal, currency)}</span>
              </div>
              <div className="flex justify-between text-[#6b5a52]">
                <span>Shipping</span>
                <span className="text-blush-500">Free</span>
              </div>
              <div className="border-t border-[#f1e6df] pt-2.5 flex justify-between font-serif text-xl text-[#5C4D47]">
                <span>Total</span>
                <span>{formatPrice(subtotal, currency)}</span>
              </div>
            </div>

            {/* Reminder */}
            <div className="mt-5 bg-blush-50 rounded-lg p-3 text-[12px] text-[#8a5a46] text-center">
              Free shipping · One-time purchase (no subscription) · Ships to the United States only.
            </div>

            {/* Consent */}
            <label className="flex items-start gap-3 mt-5 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 mt-1 accent-blush-500 shrink-0"
              />
              <span className="text-[12px] text-[#6b5a52] leading-relaxed">
                I am 18 years or older and agree to the{" "}
                <Link to="/terms-of-purchase" className="text-blush-500 underline">Terms of Purchase</Link>,{" "}
                <Link to="/terms-conditions" className="text-blush-500 underline">Terms &amp; Conditions</Link>,{" "}
                <Link to="/shipping-policy" className="text-blush-500 underline">Shipping Policy</Link>,{" "}
                <Link to="/return-policy" className="text-blush-500 underline">Return Policy</Link>,{" "}
                <Link to="/refund-policy" className="text-blush-500 underline">Refund Policy</Link>, and{" "}
                <Link to="/privacy-policy" className="text-blush-500 underline">Privacy Policy</Link>.
              </span>
            </label>

            {/* Disclaimer */}
            <p className="text-[11px] text-[#a3938a] leading-relaxed mt-4">
              I agree to pay the total amount provided on the checkout page (free shipping via USPS). To cancel your
              order, please call our customer service team CST Mon–Fri (9am–5pm) at {site.phone} or email{" "}
              {site.email}. For guidelines on returns and cancellations please visit our Terms &amp; Conditions page
              for instructions on returning a product or canceling an order. Your credit card will be billed with the
              following descriptor: {site.descriptor}. This is how the charge will appear on the cardholder's billing
              statement. Products will be shipped in 3–5 business days via USPS.*
            </p>

            <button
              type="submit"
              disabled={!agreed}
              className={`w-full mt-5 text-sm uppercase tracking-[0.22em] py-4 rounded-full transition-colors ${
                agreed
                  ? "bg-blush-500 text-white hover:bg-blush-600"
                  : "bg-[#e7d8cf] text-[#b3a195] cursor-not-allowed"
              }`}
            >
              Place Order — {formatPrice(subtotal, currency)}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
