"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" flex-1 flex-coloverflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-5 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col lg:max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(/hero-image.png)`,
                    }}
                  >
                    <div className="flex flex-col gap-2 text-left">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Capture your thoughts, organize your life
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        ThinkBoard is the perfect place to jot down quick notes,
                        create detailed outlines, and manage your tasks. With
                        its intuitive interface, you can easily create, view,
                        edit, and delete notes, keeping your information
                        organized and accessible.
                      </h2>
                    </div>
                    <Link href={"/notes"} className="btn rounded-full shadow-none">
                      <span className="truncate">Get Started</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-4">
                  <h1 className="text-[#101418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Seamless note-taking across all your devices
                  </h1>
                  <p className="text-[#101418] text-base font-normal leading-normal max-w-[720px]">
                    ThinkBoard syncs your notes across all your devices, so you
                    can access your information anytime, anywhere. Whether
                    you're on your computer, tablet, or phone, your notes are
                    always at your fingertips.
                  </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
                  <div className="flex flex-col gap-3 pb-3 transition-transform duration-300 ease-in-out hover:scale-105">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                      style={{ backgroundImage: "url(/notes.png)" }}
                    />
                    <div>
                      <p className="text-[#101418] text-base font-medium leading-normal">
                        Create and Edit Notes
                      </p>
                      <p className="text-[#5c738a] text-sm font-normal leading-normal">
                        Quickly jot down ideas, create detailed outlines, and
                        format your notes with rich text editing tools.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pb-3 transition-transform duration-300 ease-in-out hover:scale-105">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                      style={{ backgroundImage: "url(/laptop.png)" }}
                    />
                    <div>
                      <p className="text-[#101418] text-base font-medium leading-normal">
                        Organize with Ease
                      </p>
                      <p className="text-[#5c738a] text-sm font-normal leading-normal">
                        Organize your notes with tags, folders, and search
                        functionality, making it easy to find what you need.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pb-3 transition-transform duration-300 ease-in-out hover:scale-105">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                      style={{ backgroundImage: "url(/access-anywhere.png)" }}
                    />
                    <div>
                      <p className="text-[#101418] text-base font-medium leading-normal">
                        Access Anywhere
                      </p>
                      <p className="text-[#5c738a] text-sm font-normal leading-normal">
                        Access your notes on any device, with seamless syncing
                        across your computer, tablet, and phone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex justify-center">
            <div className="flex max-w-[960px] flex-1 flex-col"></div>
          </footer>
        </div>
      </main>
      <Footer />
    </>
  );
}
