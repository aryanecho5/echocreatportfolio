import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-700">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/">
        <a className="bg-[#0CAF60] text-white font-medium py-2.5 px-6 rounded-full hover:bg-[#089e51] transition-all duration-300 flex items-center gap-2">
          Go back home
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
        </a>
      </Link>
    </div>
  );
}
