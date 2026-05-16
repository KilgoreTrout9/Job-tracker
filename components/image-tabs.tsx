"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ImageTabs() {
   const [activeTab, setActiveTab] = useState("organize"); // organize, hired, manage

  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex gap-2 justify-center mb-8">
            <Button
              variant={activeTab === "organize" ? "default" : "outline"}
              onClick={() => setActiveTab("organize")}
            >
              Organize Applications
            </Button>
            <Button
              variant={activeTab === "hired" ? "default" : "outline"}
              onClick={() => setActiveTab("hired")}
            >
              Get Hired
            </Button>
            <Button
              variant={activeTab === "manage" ? "default" : "outline"}
              onClick={() => setActiveTab("manage")}
            >
              Manage Boards
            </Button>
          </div>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            {activeTab === "organize" && (
              <Image
                src="/hero-images/hero1.png"
                alt="Organize Applications"
                width={1200}
                height={800}
              />
            )}
            {activeTab === "hired" && (
              <Image
                src="/hero-images/hero2.png"
                alt="Get Hired"
                width={1200}
                height={800}
              />
            )}
            {activeTab === "manage" && (
              <Image
                src="/hero-images/hero3.png"
                alt="Manage Boards"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
