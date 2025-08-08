"use client";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    document.title = "ThinkBoard - Login";
    if (session) {
      router.push("/notes");
    }
  }, [session?.user]);

  return (

      <div className="flex min-h-screen items-center justify-center bg-[#181c23]">
        <div className="bg-[#101418] rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6">
            Sign in to ThinkBoard
          </h2>
          <button
            onClick={() => signIn("github")}
            className="flex items-center w-full justify-center cursor-pointer gap-3 bg-[#23272f] hover:bg-[#333843] text-white font-semibold py-3 px-6 rounded-lg mb-4 transition-colors border border-[#23272f]"
          >
            <svg height="24" width="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
            Sign in with GitHub
          </button>
          <button
            onClick={() => alert("Google sigin will be available soon...")}
            className="flex items-center w-full justify-center cursor-pointer gap-3 bg-white hover:bg-gray-200 text-[#101418] font-semibold py-3 px-6 rounded-lg mb-2 transition-colors border border-gray-300"
          >
            <svg width="24" height="24" viewBox="0 0 48 48">
              <g>
                <path
                  fill="#4285F4"
                  d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.68 2.7 30.74 0 24 0 14.82 0 6.73 5.8 2.69 14.09l7.98 6.2C12.13 13.6 17.57 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.01l7.19 5.59C43.93 37.13 46.1 31.3 46.1 24.55z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.67 28.29a14.5 14.5 0 0 1 0-8.58l-7.98-6.2A23.94 23.94 0 0 0 0 24c0 3.77.9 7.34 2.69 10.79l7.98-6.2z"
                />
                <path
                  fill="#EA4335"
                  d="M24 48c6.48 0 11.93-2.15 15.9-5.86l-7.19-5.59c-2.01 1.35-4.6 2.16-8.71 2.16-6.43 0-11.87-4.1-13.33-9.59l-7.98 6.2C6.73 42.2 14.82 48 24 48z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </g>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
  );
}
