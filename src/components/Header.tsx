const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Trouble Shooting", href: "#trouble" },
  { label: "Collaboration", href: "#collab" },
];

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-bold text-white text-sm tracking-widest">GAYEON.DEV</span>
        <nav className="flex gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
