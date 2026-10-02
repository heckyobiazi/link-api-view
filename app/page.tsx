import { ArrowRight, ArrowUpRight, ArrowLeftRight, Check, ChevronRight, CircleHelp, Code2, Globe2, Layers3, LockKeyhole, Radio, Route, ShieldCheck, WalletCards, Webhook } from "lucide-react";
import Image from "next/image";
import linkLogo from "../assets/LINK_Logo_White.png";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";


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

export default function Home() {
  return (
    <main className="overflow-hidden">
  <header className="static mt-4 border-b border-white/10 bg-black text-white">
  <div className="shell flex h-[104px] items-center justify-between px-6">
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

 <section id="top" className="relative overflow-hidden border-b border-white/10 bg-black px-6 text-white sm:px-8 lg:px-12">
   <div className="relative mx-auto flex min-h-[625px] w-full max-w-7xl flex-col items-center gap-12 py-16 lg:py-20">
        <div className="w-full max-w-[1200px] text-center">
          <div className="text-[16px] font-semibold text-[#ffffff]">FX infrastructure for modern payments</div>
          <h1 className="bg-gradient-to-r from-[#0038ff] via-white to-[#0038ff] bg-clip-text text-[clamp(48px,6.2vw,76px)] font-semibold leading-[.99] tracking-[-.07em] text-transparent"><span className="whitespace-nowrap">Move money across borders.</span><br />Build on one API.</h1>
          <p className="mx-auto mt-6 max-w-[875px] text-[16px] leading-7 text-[#656b78]">LINK connects local payment rails to stablecoin settlement, so your team can build global payment experiences without stitching the infrastructure together itself.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3"><Link href="#quickstart" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition shadow-lg shadow-blue-800/80 hover:bg-blue-700">Explore the API <ArrowRight size={16}/></Link><Link href={overview} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition shadow-lg shadow-blue-800/80 hover:bg-blue-700">Platform overview <ArrowUpRight size={15} /></Link></div>
          <div className="mt-9 flex items-center justify-center gap-3 text-[12px] text-[#777d89]"><span className="flex -space-x-1.5"><i className="h-6 w-6 rounded-full border-2 border-white bg-[#0038ff]"/><i className="h-6 w-6 rounded-full border-2 border-white bg-[#ad91e9]"/><i className="h-6 w-6 rounded-full border-2 border-white bg-[#b9fc6b]"/></span><span>One integration. Multiple payment rails.</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -inset-2 rounded-[28px] bg-[#0038ff]/15 blur-xl" />
          <div className="relative overflow-hidden rounded-[24px] border border-[#0038ff] bg-black p-5 shadow-lg shadow-blue-800/80 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[.11em] text-[#737989]">Payment orchestration</div>
                <div className="mt-1 text-[17px] font-semibold tracking-[-.03em]">One connection. Two directions.</div></div><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f1f4ff] text-[#0038ff]"><ArrowLeftRight size={18}/></span></div>
            <div className="relative mt-7 grid grid-cols-[1fr_90px_1fr] items-center gap-2 sm:grid-cols-[1fr_112px_1fr]">
              <div className="rounded-2xl border border-[#e9ebf0] bg-[#fafbfc] p-4 text-[#111318]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[#555d6c] shadow-sm"><Globe2 size={19}/></span><div className="mt-4 text-[12px] font-semibold">Local rails</div><div className="mt-1 text-[11px] text-[#7a808d]">Bank · wallet · payout</div></div>
              <div className="relative flex flex-col items-center gap-2"><span className="absolute left-0 right-0 top-[20px] border-t border-dashed border-[#b6c2ff]"/><span className="z-[1] grid h-[42px] w-[42px] place-items-center rounded-full border border-[#dce3ff] bg-white text-[#0038ff] shadow-sm"><ArrowLeftRight size={18}/></span><span className="z-[1] rounded-full bg-white px-1 text-[10px] font-semibold text-[#0038ff]">LINK API</span></div>
              <div className="rounded-2xl border border-[#e9ebf0] bg-[#fafbfc] p-4 text-[#111318]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e9edff] text-[#0038ff]"><Layers3 size={19}/></span><div className="mt-4 text-[12px] font-semibold">Digital dollars</div><div className="mt-1 text-[11px] text-[#7a808d]">USDC · USDT</div></div>
            </div>
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
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#e9ebf0] bg-white px-4 py-3 shadow-lg sm:block"><div className="flex items-center gap-2 text-[11px] font-semibold"><span className="grid h-7 w-7 place-items-center rounded-lg bg-[#f3efff] text-[#8961df]"><Webhook size={14}/></span>Webhook delivered <Check size={13} className="text-[#38a665]"/></div><div className="ml-9 mt-0.5 text-[10px] text-[#818692]">transaction_status_updated</div></div>
        </div>
      </div>
    </section>


      
      </main>
  )
}
