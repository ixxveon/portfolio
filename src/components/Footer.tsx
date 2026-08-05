import { profile } from "../data/portfolio";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 px-6 text-center">
      <p className="text-gray-500 text-sm">
        {profile.nameEn} · {profile.email}
      </p>
      <p className="text-gray-400 text-xs mt-2">Built with React + TypeScript + Tailwind CSS</p>
    </footer>
  );
}
