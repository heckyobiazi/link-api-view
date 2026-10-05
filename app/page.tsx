"use client";

import { ArrowRight, ArrowUpRight, ArrowLeftRight, Check, ChevronRight, CircleHelp, Code2, Globe2, Layers3, LockKeyhole, Radio, Route, ShieldCheck, WalletCards, Webhook } from "lucide-react";
import Image from "next/image";
import linkLogo from "../assets/LINK_Logo_White.png";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CopyButton } from "@/components/copy-button";


const docs = "https://docs.linkio.world/docs/getting-started";
const overview = "https://docs.linkio.world/docs/platform-overview";
const onramp = "https://docs.linkio.world/docs/business-onramp";

const request = `curl --request POST \\
  --url https://api.linkio.world/otc/onramp \\
  --header 'Content-Type: application/json' \\
  --header 'ngnc-sec-key: <YOUR_SECRET_KEY>' \\
  --data '{
    "customer_id": "cut93498342",
    "currency": "USD",
    "amount": "25000",
    "stables": "USDC",
    "wallet_address": "0xYourBaseWallet",
    "network": "BASE",
    "paymentDetails": {
      "accountNumber": "875104368977",
      "routingNumber": "026073150",
      "accountName": "Acme Corp"
    }
  }'`;

  const flow = [
  { number: "01", title: "Get your credentials", copy: "Create a LINK Bridge account and generate a secret key in the developer dashboard.", icon: LockKeyhole },
  { number: "02", title: "Create a request", copy: "Send the customer, currency, amount and destination details to the right ramp endpoint.", icon: Code2 },
  { number: "03", title: "Move funds", copy: "LINK coordinates the local payment and stablecoin settlement for your chosen flow.", icon: ArrowLeftRight },
  { number: "04", title: "Track progress", copy: "Use transaction references and status updates to keep your product in sync.", icon: Radio },
  { number: "05", title: "Listen for events", copy: "Receive signed webhooks so your app can react as a transaction changes state.", icon: Webhook },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 880);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <main>
  <header className={`sticky top-0 z-50 border-b border-white/15 text-white shadow-lg shadow-black/20 backdrop-blur-xl ${isScrolled ? "bg-black/40" : "bg-black/90"}`}>
  <div className="mx-auto flex h-[104px] w-full max-w-7xl items-center justify-between px-6">
    <Link href="#top" aria-label="LINK home" className="-ml-[-79px] flex items-center">
      <Image src={linkLogo} alt="LINK" className="h-8 w-auto" priority />
    </Link>

    <nav
      className="hidden items-center gap-16 text-sm font-medium text-white md:flex"
      aria-label="Main navigation"
    >
      <Link href="#platform" className="flex items-center gap-2 transition hover:text-white/70">
        Products
        <span aria-hidden="true" className="text-base leading-none"></span>
      </Link>
      <Link href="#how-it-works" className="transition hover:text-white/70">
        About Us
      </Link>
    </nav>

    <Link
      href="#quickstart"
      className="mr-16 flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
      Get Started
    </Link>
  </div>
</header>

 <section id="top" className="relative overflow-x-clip border-b border-white/10 bg-black px-6 py-18 text-white sm:px-8 sm:py-24 lg:px-12">
   <div className="relative mx-auto flex min-h-[625px] w-full max-w-7xl flex-col items-center gap-12 py-16 lg:py-20">
        <div className="w-full max-w-[1200px] text-center">
          <div className="text-[16px] font-semibold text-[#ffffff]">FX infrastructure for modern payments</div>
          <h1 className="bg-gradient-to-r from-[#0038ff] via-white to-[#0038ff] bg-clip-text text-[clamp(48px,6.2vw,76px)] font-semibold leading-[.99] tracking-[-.07em] text-transparent"><span className="whitespace-nowrap">Move money across borders.</span><br />Build on one API.</h1>
          <p className="mx-auto mt-6 max-w-[875px] text-[16px] leading-7 text-[#656b78]">LINK connects local payment rails to stablecoin settlement, so your team can build global payment experiences without stitching the infrastructure together itself.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3"><Link href="#quickstart" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition shadow-lg shadow-blue-800/80 hover:bg-blue-700">Explore the API <ArrowRight size={16}/></Link><Link href={overview} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition shadow-lg shadow-blue-800/80 hover:bg-blue-700">Platform overview <ArrowUpRight size={15} /></Link></div>
          <div className="mt-9 flex items-center justify-center gap-3 text-[12px] text-[#777d89]"><span className="flex -space-x-1.5"><i className="h-6 w-6 rounded-full border-2 border-white bg-[#0038ff]"/><i className="h-6 w-6 rounded-full border-2 border-white bg-[#ad91e9]"/><i className="h-6 w-6 rounded-full border-2 border-white bg-[#b9fc6b]"/></span><span>One integration. Multiple payment rails.</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-[940px]">
          <div className="absolute -inset-2 rounded-[28px] bg-[#0038ff]/15 blur-xl" />
          <div className="relative overflow-hidden rounded-[24px] bg-black p-5 shadow-lg sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[.11em] text-[#737989]">Payment orchestration</div>
                <div className="mt-1 text-[17px] font-semibold tracking-[-.03em]">One connection. Two directions.</div></div><span className="grid h-9 w-9 place-items-center text-[#0038ff]"><ArrowLeftRight size={23}/></span></div>
            <div className="relative mt-7 grid grid-cols-[7rem_minmax(4rem,1fr)_7rem] items-center gap-2">
              <div className="text-center"><span className="grid h-16 w-16 place-items-center text-[#0038ff] mx-auto"><Globe2 size={36} className="drop-shadow-md"/></span><div className="mt-4 text-[12px] font-semibold">Local rails</div><div className="mt-1 whitespace-nowrap text-[11px] text-[#7a808d]">Bank · Wallet · Payout</div></div>
              <div className="relative flex flex-col items-center gap-2"><span className="absolute -left-6 -right-6 top-[20px] h-0.5 bg-gradient-to-r from-white via-[#0038ff] to-white [mask-image:repeating-linear-gradient(to_right,#000_0_8px,transparent_8px_14px)] [-webkit-mask-image:repeating-linear-gradient(to_right,#000_0_8px,transparent_8px_14px)]"/><span className="z-[1] grid h-[42px] w-[42px] place-items-center rounded-full bg-white text-[#0038ff] shadow-sm"><ArrowLeftRight size={18}/></span><span className="z-[1] px-1 text-[16px] font-semibold text-[#ffffff]">LINK API</span></div>
              <div className="text-center"><span className="grid h-16 w-16 place-items-center text-[#0038ff] mx-auto"><Layers3 size={36} className="drop-shadow-md"/></span><div className="mt-4 text-[12px] font-semibold">Digital dollars</div><div className="mt-1 text-[11px] text-[#7a808d]">USDC · USDT</div></div>
            </div>
            <br />
            <br />
            <div className="mt-5 rounded-2xl bg-[#111318] p-4 text-white sm:p-5">
              <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-[11px] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b9fc6b]"/> TRANSACTION STATUS</div>
              <span className="rounded-full bg-[#b9fc6b]/10 px-2.5 py-1 text-[10px] font-semibold text-[#b9fc6b]">PROCESSING</span></div>
              <div className="mt-4 flex items-center justify-between"><div>
                <div className="text-[11px] text-white/45">On-ramp</div>
              <div className="mt-1 text-[18px] font-medium tracking-tight">USD <span className="text-white/35">→</span> USDC</div></div>
              <div className="text-right">
                <div className="text-[11px] text-white/45">Settlement</div>
                <div className="mt-1 text-[13px] font-medium">Status via webhook</div></div></div>
              <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[67%] rounded-full bg-[#0038ff]"/></div>
              <div className="mt-2 flex justify-between text-[9px] text-white/35"><span>REQUEST RECEIVED</span><span>SETTLEMENT</span><span>COMPLETE</span></div>
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] text-[#858b97]"><span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-[#0038ff]"/> Built-in orchestration</span></div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white px-4 py-3 shadow-lg sm:block"><div className="flex items-center gap-2 text-[11px] font-semibold"><span className="grid h-7 w-7 place-items-center rounded-lg bg-[#f3efff] text-[#8961df]"><Webhook size={14}/></span>Webhook delivered <Check size={13} className="text-[#0038ff]"/></div><div className="ml-9 mt-0.5 text-[10px] text-[#818692]">transaction_status_updated</div></div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white px-4 py-3 text-[#111318] shadow-lg sm:block"><div className="flex items-center gap-2 text-[11px] font-semibold"><span className="grid h-7 w-7 place-items-center rounded-lg bg-[#f3efff] text-[#8961df]"><Webhook size={14}/></span>Webhook delivered <Check size={13} className="text-[#38a665]"/></div><div className="ml-9 mt-0.5 text-[10px] text-[#818692]">transaction_status_updated</div></div>
        </div>
      </div>
    </section>
    

      <section className="border-b border-white/10 bg-black text-white py-18 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-white/15 px-6 py-7 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-8">
        <div className="py-4 sm:px-8 sm:py-0 sm:first:pl-0"><div className="text-[31px] font-semibold tracking-[-.06em]">25<span className="text-[#0038ff]">+</span></div><div className="mt-1 text-[12px] text-[#727885]">currencies across Business API coverage</div></div>
        <div className="py-4 sm:px-8 sm:py-0"><div className="text-[31px] font-semibold tracking-[-.06em]">400<span className="text-[#0038ff]">+</span></div><div className="mt-1 text-[12px] text-[#727885]">currency pairs across the LINK platform</div></div>
        <div className="py-4 sm:px-8 sm:py-0"><div className="text-[31px] font-semibold tracking-[-.06em]">One<span className="text-[#0038ff]"> API</span></div><div className="mt-1 text-[12px] text-[#727885]">for ramp orchestration and settlement</div></div>
      </div>
    </section>

    <section id="platform" className="relative overflow-x-clip border-b border-white/10 bg-black px-6 text-white py-18 sm:py-24 sm:px-8 lg:px-12">
      <div className="relative mx-auto flex min-h-[625px] w-full max-w-7xl flex-col items-center gap-12 py-16 lg:py-20">
        <div className="w-full max-w-[1200px] text-center">
          <div className="text-[16px] font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0038ff] to-[#ffffff]">The infrastructure layer</div>
          <h4 className="text-[clamp(32px,6.2vw,76px)] font-semibold leading-[.99] tracking-[-.07em] text-white">Build the payment experience. Skip the plumbing.</h4>
          <p className="mx-auto mt-6 max-w-[875px] text-[16px] leading-7 text-[#656b78]">Going global means dealing with local payment methods, conversion, compliance and status tracking. LINK brings those moving pieces into one integration your team can build around.</p>
          </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { icon: Route, n: "01", title: "One integration, many rails", copy: "Connect bank transfers and stablecoin wallets through a unified API, instead of maintaining a different integration for every market." },
            { icon: ShieldCheck, n: "02", title: "Complexity handled upstream", copy: "LINK provides FX and stablecoin payment infrastructure, with onboarding and compliance tools built into the platform." },
            { icon: Radio, n: "03", title: "Know what happens next", copy: "Track transactions by reference and use webhook events to keep customers and internal systems up to date." },
          ].map(({ icon: Icon, n, title, copy }) => <article key={n} className="group rounded-[20px] border border-[#0038ff] bg-black p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md shadow-blue-500 sm:p-7">
            <div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center text-[#0038ff]"><Icon size={19}/></span><span className="text-[11px] font-medium text-[#b1b5bf]"></span></div>
            <h3 className="mt-9 text-[19px] font-semibold tracking-[-.035em]">{title}</h3><p className="mt-3 text-[13px] leading-6 text-[#747a87]">{copy}</p>
            <div className="mt-2 shadow-sm shadow-blue-500"/></article>)}
        </div>
      </div>
    </section>
  
  <section className="relative overflow-hidden bg-[#111318] py-18 text-white sm:py-24">
      <div className="absolute -right-24 -top-48 h-[470px] w-[470px] rounded-full border border-white/[.07]"/>
      <div className="absolute -right-3 -top-28 h-[330px] w-[330px] rounded-full border border-white/[.07]"/>
      <div className="absolute right-24 top-0 h-[180px] w-[180px] rounded-full bg-[#0038ff]/30 blur-[90px]"/>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:grid-cols-[1fr_1fr]"><div>
        <div className="ml-[5px] not-italic text-[16px] font-semibold bg-gradient-to-r from-[#0038ff] via-white to-[#0038ff] text-transparent bg-clip-text">What you can build</div>
        <h2 className="max-w-[490px] text-[clamp(36px,4.4vw,55px)] font-semibold leading-[1.04] tracking-[-.06em]">Global money movement, inside your product.</h2><p className="mt-5 max-w-[460px] text-[14px] leading-7 text-white/55">Give users and businesses a simpler way to move between local currencies and digital dollars, with the flow shaped around your product.</p>
        <Link href={overview} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0038ff] hover:text-white">See platform capabilities <ArrowUpRight size={15}/></Link>
        </div>
        <div className="grid grid-cols-2 gap-3">{[
          { icon: WalletCards, title: "Stablecoin wallets", text: "Connect fiat funding and payouts." }, { icon: ArrowLeftRight, title: "On & off ramps", text: "Bridge fiat and USDC or USDT." }, { icon: Globe2, title: "Remittance flows", text: "Move value across markets." }, { icon: Layers3, title: "Global payroll", text: "Build settlement into a platform." },
        ].map(({ icon: Icon, title, text }) => <div key={title} className="rounded-[17px] border border-white/[.1] bg-[#1b1d24] p-5 transition duration-200 hover:-translate-y-1 hover:bg-[#242834] hover:shadow-md hover:shadow-blue-500/50 sm:p-7"><Icon size={19} className="text-[#9aa8ff]"/><h3 className="mt-7 text-[13px] font-semibold">{title}</h3><p className="mt-1.5 text-[11px] leading-5 text-white/45">{text}</p></div> )}</div>
      </div>
    </section>

 <section id="how-it-works" className="bg-black py-18 sm:py-24">
      <div className="shell">
        <div className="mx-auto max-w-[630px] text-center">
          <div className="text-[16px] font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0038ff] to-[#ffffff] justify-center mb-5">A clear path to your first flow</div>
      <h4 className="text-[clamp(36px,4.4vw,55px)] text-white font-semibold leading-[1.04] tracking-[-.06em]">From API key to transaction event.</h4>
      <p className="mt-5 text-[14px] leading-6 text-white/55">A familiar developer journey, with LINK coordinating the payment rails behind the scenes.</p></div>
        <div className="relative mt-14 mx-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{flow.map(({ number, title, copy, icon: Icon }, i) => <article key={number} className="relative rounded-[17px] border border-white/[.1] bg-[#1b1d24] p-5">
          <div className="flex items-center justify-between"><span className="grid h-9 w-9 place-items-center text-[#ffffff]"><Icon size={16}/></span>
          <span className="text-[10px] font-semibold tracking-[.1em] text-white/45"></span></div>
          <h3 className="mt-6 text-[14px] font-semibold text-white">{title}</h3>
          <p className="mt-2 text-[11px] leading-[1.7] text-white/45">{copy}</p>{i < flow.length - 1 && <ChevronRight className="absolute -right-[16px] top-1/2 z-[1] hidden -translate-y-1/2 rounded-full bg-[#0038ff] text-white/45 lg:block" size={20}/>}</article>)}</div>
      </div>
    </section>

      <section id="quickstart" className="bg-black py-18 sm:py-24">
      <div className="shell">
        <div className="mx-auto max-w-[630px] text-center">
        <div className="text-[16px] font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0038ff] to-[#ffffff] justify-center mb-5">Quickstart</div>
      <h4 className="text-[clamp(26px,4.4vw,55px)] text-white font-semibold leading-[1.04] tracking-[-.06em]">Your first request starts here.</h4>
      <p className="mt-5 text-[14px] leading-6 text-white/55">Start with a LINK Bridge account and a server-side secret key. This illustrative Business API request shows the shape of an on-ramp call.</p></div>
        <div className="mt-10 mx-5 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <div className="overflow-hidden rounded-[20px] bg-[#111318] shadow-[0_20px_55px_-30px_rgba(14,22,50,.5)]">
            <div className="flex items-center justify-between border-b border-white/[.08] px-5 py-4">
              <div className="flex items-center gap-3"><span className="flex gap-1.5">
                <i className="h-2 w-2 rounded-full bg-[#ff7167]"/><i className="h-2 w-2 rounded-full bg-[#f4bf4f]"/><i className="h-2 w-2 rounded-full bg-[#57c75b]"/></span>
                <span className="text-[11px] text-white/50">Create a Business on-ramp</span></div>
              <CopyButton value={request}/>
            </div>
            <div className="code-scroll overflow-x-auto p-5 sm:p-6"><pre className="min-w-[500px] whitespace-pre text-[11px] leading-[1.8] text-[#c3e88d]"><code>{request}</code></pre></div>
            <div className="border-t border-white/[.08] px-5 py-3 text-[10px] leading-5 text-white/40">Keep secret keys on your server. Never expose them in browser code. Verify required fields and supported networks in the current endpoint guide.</div>
          </div>
          <div className="flex flex-col rounded-[20px] border border-white/[.1] bg-[#111318] p-6 sm:p-7"><div>
            <div className="text-[11px] font-bold uppercase tracking-[.1em] text-[#737987]">Before you begin</div>
            <h3 className="mt-2 text-[23px] text-white font-semibold tracking-[-.04em]">A few things to have ready.</h3></div>
          <ul className="mt-6 space-y-4">{["A LINK Bridge account and API credentials", "A server-side environment for secret keys", "A customer ID, source currency and amount", "A destination wallet and supported network", "A webhook endpoint to receive status updates"].map(item => <li key={item} className="flex items-start gap-3 text-[12px] leading-5 text-white/60">
            <span className="mt-0.5 grid h-[17px] w-[17px] shrink-0 place-items-center text-[#0038ff]">
            <Check size={11} strokeWidth={3}/></span>{item}</li>)}</ul>
            <div className="mt-auto pt-7">
              <div className="mb-3 h-px bg-[#eceef2]"/>
            <Link href="https://app.linkio.world" target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-2 rounded-full bg-[#0038ff] px-4 text-xs font-semibold text-white hover:bg-[#002ed6]">Open developer dashboard <ArrowUpRight size={13}/></Link>
            <Link href={onramp} target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-2 rounded-full bg-[#0038ff] px-4 text-xs font-semibold text-white hover:bg-[#002ed6]">Read endpoint guide <ArrowUpRight size={13}/></Link></div>
            </div>
        </div>
        <div className="mt-5 mx-5 flex flex-col justify-between gap-4 rounded-[17px] border border-[#e6e9f0] bg-white px-5 py-4 sm:flex-row sm:items-center"><div className="flex items-start gap-3">
          <span className="mt-0.5 text-[#0038ff]"><CircleHelp size={17}/></span>
          <p className="text-[12px] leading-5 text-[#626875]"><strong className="font-semibold text-[#242833]">Where next?</strong> Check coverage, rates, processing windows, customer onboarding and webhook setup for your use case.</p></div>
          <Link href={docs} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1.5 text-[12px] font-semibold text-[#0038ff]">Browse LINK docs <ArrowUpRight size={14}/></Link></div>
      </div>
    </section>

<section className="bg-black py-16 text-white sm:py-[72px]">
  <div className="shell mx-5 flex flex-col justify-between gap-7 md:flex-row md:items-center">
    <div>
      <div className="text-[16px] font-semibold uppercase tracking-[.13em] text-white/75">Your next global flow</div>
      <h2 className="mt-3 text-[clamp(20px,4vw,35px)] font-semibold leading-tight tracking-[-.055em]">Make money movement part of your product.</h2>
      </div>
   <Link href="mailto:partnerships@linkio.africa" target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-2 rounded-full bg-[#0038ff] px-4 text-xs font-semibold text-white hover:bg-[#002ed6]">Contact Us <ArrowUpRight size={15}/></Link>
  </div>
  </section>

    
      
      </main>
  )
}
