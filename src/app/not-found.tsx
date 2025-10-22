import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh grid place-items-center p-8">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="text-zinc-400">Página não encontrada.</p>
        <Link
          href="/"
          className="inline-block rounded-xl border border-zinc-700 px-5 py-2 hover:bg-zinc-900"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
