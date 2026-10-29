"use client";

import React, { useState } from "react";

export default function ClaimSmartLanding() {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "CLAIM SMART",
            text: "A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
            url: window.location.href,
          });
          return;
        } catch {
          // fall through to clipboard
        }
      }
      navigator.clipboard.writeText(window.location.href);
      setCopyStatus("Link copied");
      setTimeout(() => setCopyStatus(null), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#363C47] flex flex-col font-sans selection:bg-[#FADCE9] selection:text-[#880E4F]">
      {/* Ticker strip using exact wording from content.txt */}
      <div
        className="ticker-wrap w-full bg-[#FDF0F6] border-b border-[#F5B8D2] overflow-hidden py-3 text-[#880E4F] select-none no-print"
        aria-hidden="true"
      >
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="label-sm px-6 font-mono text-[10px] tracking-[0.16em] uppercase">
                CLAIM SMART
              </span>
              <span className="text-[#C2185B] text-xs">◆</span>
              <span className="label-sm px-6 font-mono text-[10px] tracking-[0.16em] uppercase">
                A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM
              </span>
              <span className="text-[#C2185B] text-xs">◆</span>
              <span className="label-sm px-6 font-mono text-[10px] tracking-[0.16em] uppercase">
                A WARRANTY CLAIM IS DECIDED ON RECORDS. KEEP YOURS, AND ASK FOR THEIRS IN WRITING.
              </span>
              <span className="text-[#C2185B] text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header: strictly on one line — logo, two links "The 15 steps" and "Key numbers", and the Download button */}
      <header className="sticky top-0 z-50 h-[72px] bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] no-print">
        <div className="max-w-[1180px] mx-auto h-full px-4 sm:px-8 md:px-10 flex items-center justify-between gap-3 sm:gap-6 whitespace-nowrap">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-2.5 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#C2185B] rounded-full py-1"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C2185B] flex items-center justify-center text-white font-mono text-[11px] sm:text-xs font-bold shrink-0">
              CS
            </div>
            <span className="font-extrabold text-[16px] sm:text-[18px] tracking-[-0.035em] text-[#0D1117]">
              CLAIM SMART
            </span>
          </a>

          {/* Two Links: hidden on small screens so logo and Download button fit comfortably */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-8 text-[14px] md:text-[15px] font-semibold text-[#5B6472]">
            <a
              href="#steps"
              className="hover:text-[#0D1117] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C2185B] rounded-md px-1 py-0.5"
            >
              The 15 steps
            </a>
            <a
              href="#key-numbers"
              className="hover:text-[#0D1117] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C2185B] rounded-md px-1 py-0.5"
            >
              Key numbers
            </a>
          </nav>

          {/* Download Button */}
          <button
            onClick={handlePrint}
            className="shrink-0 bg-[#0D1117] hover:bg-[#C2185B] text-white text-[13px] sm:text-[13.5px] font-medium leading-none px-4 sm:px-5 py-2.5 rounded-full transition-colors cursor-pointer min-h-[38px] sm:min-h-[40px] focus:outline-none focus:ring-2 focus:ring-[#C2185B]"
          >
            Download
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-16 sm:py-20 md:py-28 bg-white border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <h1 className="headline-display text-[#0D1117] tracking-[-0.035em] font-extrabold mb-5 text-balance">
                CLAIM SMART
              </h1>
              <p className="body-lead text-[#5B6472] mb-8 text-pretty">
                A free checklist for anyone about to file a warranty claim.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center bg-[#C2185B] hover:bg-[#A3134C] text-white font-semibold text-[15px] px-7 py-3.5 rounded-full shadow-raised transition-all duration-200 hover:-translate-y-0.5 cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#C2185B]"
                >
                  Download
                </button>
              </div>
            </div>

            {/* Right Column: Headline Card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-[26px] bg-[#0D1117] text-white p-7 sm:p-10 shadow-raised overflow-hidden border border-[#1e2632]">
                <div className="absolute inset-0 scanline-texture opacity-30 pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-4">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#F472B6] font-semibold">
                    THE IDEA IN ONE LINE
                  </span>
                  <p className="font-mono text-[18px] sm:text-[21px] leading-[1.45] text-white font-medium">
                    A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR: full sentence shown once, no extra device cards */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#F7F8FA] border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="flex flex-col items-start">
            <h2 className="headline-lg text-[#0D1117] tracking-[-0.035em] font-extrabold mb-6">
              WHO THIS IS FOR
            </h2>
            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-8 sm:p-10 shadow-card w-full">
              <p className="body-lead text-[#363C47] text-[18px] sm:text-[20px] leading-[1.72] max-w-none">
                Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
                and who wants the claim to be decided on facts, in writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY NUMBERS: heading hidden as instructed, only the numbers & stats */}
      <section id="key-numbers" className="w-full py-16 sm:py-20 md:py-24 bg-white border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="rounded-[18px] border border-[#E7EAEF] bg-[#E7EAEF] overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-px shadow-card">
            {/* Stat 1 */}
            <div className="bg-white p-7 sm:p-9 flex flex-col justify-between">
              <div className="stat-number text-[#0D1117] mb-3">
                15
              </div>
              <p className="text-[17px] font-semibold text-[#0D1117] leading-snug">
                steps in the checklist.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-7 sm:p-9 flex flex-col justify-between">
              <div className="stat-number text-[#0D1117] mb-3">
                4
              </div>
              <p className="text-[17px] font-semibold text-[#0D1117] leading-snug">
                records to keep before anything goes wrong.
              </p>
            </div>

            {/* Stat 3 (Hot cell in pink #C2185B) */}
            <div className="bg-white p-7 sm:p-9 flex flex-col justify-between">
              <div className="stat-number text-[#C2185B] mb-3">
                1
              </div>
              <p className="text-[17px] font-bold text-[#880E4F] leading-snug">
                rule: if it is not in writing, it did not happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15 STEPS AS PLAIN NUMBERED CARDS (NO TICK BOXES, NO PROGRESS BAR) */}
      <div id="steps">
        {/* Section 1: BEFORE ANYTHING GOES WRONG */}
        <section className="w-full py-16 sm:py-20 md:py-24 bg-[#F7F8FA] border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
            <h2 className="headline-lg text-[#0D1117] tracking-[-0.035em] font-extrabold mb-8 sm:mb-10">
              BEFORE ANYTHING GOES WRONG
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 1 */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F6] border border-[#F5B8D2] text-[#C2185B] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    1
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Keep the invoice.
                  </h3>
                  <p className="text-[17px] text-[#363C47] leading-[1.72]">
                    Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F6] border border-[#F5B8D2] text-[#C2185B] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    2
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Register the product.
                  </h3>
                  <p className="text-[17px] text-[#363C47] leading-[1.72]">
                    Many brands ask you to register on their website or app; some add extra warranty when you do.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F6] border border-[#F5B8D2] text-[#C2185B] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    3
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Read the warranty card once.
                  </h3>
                  <p className="text-[17px] text-[#363C47] leading-[1.72]">
                    Note how long it lasts, what it covers, and what it excludes.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F6] border border-[#F5B8D2] text-[#C2185B] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    4
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Record the condition.
                  </h3>
                  <p className="text-[17px] text-[#363C47] leading-[1.72]">
                    Take a few dated photos of the product once it is installed or unboxed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: WHEN THE FAULT APPEARS */}
        <section className="w-full py-16 sm:py-20 md:py-24 bg-white border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
            <h2 className="headline-lg text-[#0D1117] tracking-[-0.035em] font-extrabold mb-8 sm:mb-10">
              WHEN THE FAULT APPEARS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 5 */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F6] border border-[#F5B8D2] text-[#C2185B] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    5
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Record the fault.
                  </h3>
                  <p className="text-[17px] text-[#363C47] leading-[1.72]">
                    Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F6] border border-[#F5B8D2] text-[#C2185B] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    6
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Raise the complaint in writing.
                  </h3>
                  <p className="text-[17px] text-[#363C47] leading-[1.72]">
                    Use email, the brand&apos;s website or its app, not only a phone call, so there is a record.
                  </p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F6] border border-[#F5B8D2] text-[#C2185B] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    7
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Note every reference number.
                  </h3>
                  <p className="text-[17px] text-[#363C47] leading-[1.72]">
                    Write down the complaint or ticket number, the date and the name of anyone you speak to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: WHEN A TECHNICIAN VISITS */}
        <section className="w-full py-16 sm:py-20 md:py-24 bg-[#F7F8FA] border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
            <h2 className="headline-lg text-[#0D1117] tracking-[-0.035em] font-extrabold mb-8 sm:mb-10">
              WHEN A TECHNICIAN VISITS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 8 */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F6] border border-[#F5B8D2] text-[#C2185B] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    8
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Ask for the job sheet.
                  </h3>
                  <p className="text-[17px] text-[#363C47] leading-[1.72]">
                    Ask the technician for a copy of the visit report or job sheet before they leave.
                  </p>
                </div>
              </div>

              {/* Step 9 */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F6] border border-[#F5B8D2] text-[#C2185B] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    9
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Ask what was tested.
                  </h3>
                  <p className="text-[17px] text-[#363C47] leading-[1.72]">
                    Ask which test or instrument was used to reach the diagnosis.
                  </p>
                </div>
              </div>

              {/* Step 10 */}
              <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F6] border border-[#F5B8D2] text-[#C2185B] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    10
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#0D1117] mb-3 leading-tight">
                    Take your own photos.
                  </h3>
                  <p className="text-[17px] text-[#363C47] leading-[1.72]">
                    Photograph the product and anything the technician points to, during the visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: IF THE CLAIM IS REFUSED (Dark Section) */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-[#0D1117] text-white border-b border-[#1f2937]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
            <h2 className="headline-lg text-white tracking-[-0.035em] font-extrabold mb-8 sm:mb-10">
              IF THE CLAIM IS REFUSED
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Step 11 */}
              <div className="rounded-[18px] border border-white/10 bg-white/10 p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#F472B6]/20 border border-[#F472B6]/40 text-[#F472B6] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    11
                  </div>
                  <h3 className="text-[20px] font-extrabold text-white mb-3 leading-tight">
                    Ask for the reason in writing.
                  </h3>
                  <p className="text-[17px] text-white/80 leading-[1.72]">
                    Request a written explanation that names the exact cause and the evidence for it.
                  </p>
                </div>
              </div>

              {/* Step 12 */}
              <div className="rounded-[18px] border border-white/10 bg-white/10 p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#F472B6]/20 border border-[#F472B6]/40 text-[#F472B6] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    12
                  </div>
                  <h3 className="text-[20px] font-extrabold text-white mb-3 leading-tight">
                    Ask for the technical report.
                  </h3>
                  <p className="text-[17px] text-white/80 leading-[1.72]">
                    If the refusal rests on an inspection, ask for that inspection report.
                  </p>
                </div>
              </div>

              {/* Step 13 */}
              <div className="rounded-[18px] border border-white/10 bg-white/10 p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#F472B6]/20 border border-[#F472B6]/40 text-[#F472B6] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    13
                  </div>
                  <h3 className="text-[20px] font-extrabold text-white mb-3 leading-tight">
                    Escalate inside the company.
                  </h3>
                  <p className="text-[17px] text-white/80 leading-[1.72]">
                    Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
                  </p>
                </div>
              </div>

              {/* Step 14 */}
              <div className="rounded-[18px] border border-white/10 bg-white/10 p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#F472B6]/20 border border-[#F472B6]/40 text-[#F472B6] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    14
                  </div>
                  <h3 className="text-[20px] font-extrabold text-white mb-3 leading-tight">
                    Keep it factual.
                  </h3>
                  <p className="text-[17px] text-white/80 leading-[1.72]">
                    Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
                  </p>
                </div>
              </div>

              {/* Step 15 */}
              <div className="rounded-[18px] border border-white/10 bg-white/10 p-7 sm:p-8 flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#F472B6]/20 border border-[#F472B6]/40 text-[#F472B6] font-mono font-bold text-[15px] flex items-center justify-center mb-4">
                    15
                  </div>
                  <h3 className="text-[20px] font-extrabold text-white mb-3 leading-tight">
                    Know your consumer helpline.
                  </h3>
                  <p className="text-[17px] text-white/80 leading-[1.72]">
                    Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CALL TO ACTION: heading hidden as instructed, only the two action sentences */}
      <section className="w-full py-16 sm:py-20 md:py-28 bg-white border-b border-[#E7EAEF]">
        <div className="max-w-[880px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
          <p className="text-[20px] sm:text-[23px] font-extrabold text-[#0D1117] leading-snug mb-3">
            Download the checklist and keep it with your invoices.
          </p>
          <p className="text-[18px] sm:text-[20px] text-[#5B6472] leading-relaxed mb-8">
            Share it with a friend who just bought something expensive.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center bg-[#C2185B] hover:bg-[#A3134C] text-white font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-raised transition-all duration-200 hover:-translate-y-0.5 cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#C2185B]"
            >
              Download
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#C2185B]"
            >
              Share
            </button>
          </div>

          {copyStatus && (
            <p className="mt-4 text-xs font-mono text-[#880E4F]">
              {copyStatus}
            </p>
          )}
        </div>
      </section>

      {/* FOOTER: heading "FOOTER NOTE" hidden as instructed */}
      <footer className="w-full bg-[#F7F8FA] border-t border-[#E7EAEF] py-12 sm:py-16 text-[#5B6472]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[13.5px]">
          <p className="max-w-2xl leading-relaxed">
            Claim Smart is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
          </p>
          <p className="font-semibold text-[#0D1117] shrink-0">
            Made by Aleeya Syareena.
          </p>
        </div>
      </footer>
    </div>
  );
}
