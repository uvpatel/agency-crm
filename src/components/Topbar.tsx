export default function Topbar() {
  return (
    <header className="h-16 border-b border-neutral-800 flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold">Overview</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm text-neutral-400">Urvil</span>
        <div className="h-8 w-8 rounded-full bg-neutral-700" />
      </div>
    </header>
  )
}
