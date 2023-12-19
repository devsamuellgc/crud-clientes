import { Outlet } from "react-router";

export function HomeLayout() {
  return (
    <>
      <header className="flex shadow border-b h-[15vh] max-h-[80px] px-4 justify-between items-center">
        <h1 className="uppercase">Clientes</h1>
        <ul className="flex items-center gap-2">
          <li>Fale conosco</li>
          <li>Sobre nós</li>
          <li>Trabalhe conosco</li>
        </ul>
      </header>
      <main className="px-16 py-6 bg-slate-100 min-h-[85vh]">
        <Outlet />
      </main>
    </>
  );
}
