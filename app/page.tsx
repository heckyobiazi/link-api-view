import { ArrowRight, ArrowUpRight, ArrowLeftRight, Check, ChevronRight, CircleHelp, Code2, Globe2, Layers3, LockKeyhole, Radio, Route, ShieldCheck, WalletCards, Webhook } from "lucide-react";
import Image from "next/image";
import linkLogo from "../assets/LINK_Logo_White.png";
import type { AnchorHTMLAttributes, ReactNode } from "react";


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
    <header className="relative z-10 border-b border-white/10 bg-black text-white backdrop-blur">
      <div className="shell flex h-[76px] items-center justify-between">
        <a href="#top" aria-label="LINK home" className="flex items-center gap-2.5">
          <Image src={linkLogo} alt="" className="h-[22px] w-auto" priority />
        </a>
        <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#626875] md:flex" aria-label="Main navigation">
          <a href="#platform" className="transition hover:text-black">Platform</a><a href="#how-it-works" className="transition hover:text-black">How it works</a><a href="#quickstart" className="transition hover:text-black">Quickstart</a>
        </nav>
        <div className="flex items-center gap-3"><a className="hidden text-[13px] font-medium text-[#626875] transition hover:text-black sm:block" href={docs} target="_blank" rel="noreferrer">Documentation</a><a href="#quickstart" className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">Start building <ArrowUpRight size={14} /></a></div>
      </div>
    </header>


        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="dark:invert h-[14px] w-4" src="/vercel.svg" alt="Vercel logomark" width={16} height={14}/>
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
  )
}
