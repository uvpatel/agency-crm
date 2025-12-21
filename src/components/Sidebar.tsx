import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-neutral-900 border-r border-neutral-800 p-5">
      <h1 className="text-xl font-bold mb-8">Dashboard</h1>

      <nav className="space-y-4">
        <Link href="/dashboard" className="block text-neutral-300 hover:text-white">
          Overview
        </Link>
        <Link href="/dashboard/users" className="block text-neutral-300 hover:text-white">
          Users
        </Link>
        <Link href="/dashboard/settings" className="block text-neutral-300 hover:text-white">
          Settings
        </Link>
      </nav>
    </aside>
  )
}
