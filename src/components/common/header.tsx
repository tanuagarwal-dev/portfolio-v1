import Link from "next/link";

export default function Header(){
    return(
        <div className="fixed top-4 left-0 mx-2 w-full flex justify-between px-8 z-20">
            <div className="text-lg font-semibold">TA.</div>
            <div className="flex gap-8 px-8 text-lg">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
                <span className="bg-amber-300">FR <span className="bg-amber-700">EN</span></span>
            </div>
        </div>
    )
}