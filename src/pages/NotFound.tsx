import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <div className="font-serif text-7xl text-blush-200">404</div>
      <h1 className="font-serif text-3xl text-[#5C4D47] mt-4">Page not found</h1>
      <p className="text-[#8a776d] mt-3">The page you're looking for doesn't exist or has moved.</p>
      <button
        onClick={() => navigate("/")}
        className="mt-8 bg-blush-500 text-white text-sm uppercase tracking-[0.22em] px-9 py-3.5 rounded-full hover:bg-blush-600 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
}
