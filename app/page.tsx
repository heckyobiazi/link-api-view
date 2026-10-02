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
   <header className="relative z-10 border-b border-white/10 bg-black text-white">
  <div className="shell flex h-[104px] items-center justify-between px-6">
    <Link href="#top" aria-label="LINK home" className="flex items-center">
      <Image src={linkLogo} alt="LINK" className="h-14 w-auto" priority />
    </Link>

    <nav
      className="hidden items-center gap-16 text-[22px] font-medium text-white md:flex"
      aria-label="Main navigation"
    >
      <Link href="#platform" className="flex items-center gap-2 transition hover:text-white/70">
        Products
        <span aria-hidden="true" className="text-2xl leading-none">⌄</span>
      </Link>
      <Link href="#how-it-works" className="transition hover:text-white/70">
        About Us
      </Link>
    </nav>

    <Link
      href="#quickstart"
      className="flex items-center justify-center rounded-full bg-blue-600 px-9 py-3 text-[22px] font-medium text-white transition hover:bg-blue-700"
    >
      Get Started
    </Link>
  </div>
</header>


      
      </main>
  )
}
