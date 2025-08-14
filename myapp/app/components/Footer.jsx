
import Link from "next/link";

export default function FooterNavbar() {
  return (
    <footer className="bg-blue-600 text-white text-center py-6">
      {/* Top links row */}
      <div className="flex flex-wrap justify-center space-x-6 text-sm mb-4">
        <Link href="/privac" className="hover:underline">Privacy</Link>
        <Link href="/term" className="hover:underline">Terms & Conditions</Link>
        <Link href="/securit" className="hover:underline">Security</Link>
        <Link href="/remove-dat" className="hover:underline">Remove Your Data</Link>
        <Link href="/refun" className="hover:underline">Refund Policy</Link>
      </div>

      {/* Horizontal line */}
      <hr className="border-black mx-auto max-w-sm" />

      {/* Copyright */}
      <p className="text-sm mt-4 text-black">
        © 2025 Vehicles Inspectify. All Rights Reserved.
      </p>
    </footer>
  );
}
