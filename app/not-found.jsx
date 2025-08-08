import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 mt-20 ">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <p className="text-2xl mt-6 font-semibold text-slate-500">
        Page Not Found
      </p>
      <p className="text-slate-500 mt-2 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
