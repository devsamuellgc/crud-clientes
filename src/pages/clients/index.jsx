import axios from "axios";
import { Table } from "../../components/table";
import { useState } from "react";
import { useEffect } from "react";

export function Clients() {
  const [clientes, setClientes] = useState([]);
  const columns = [
    "Nome",
    "Sobrenome",
    "E-mail",
    "Telefone",
    "Data de Nascimento",
    "Ações",
  ];

  async function fetchClients() {
    const response = await axios.get(
      "https://6580c8963dfdd1b11c421705.mockapi.io/clientes"
    );
    setClientes(response.data);
  }

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h2>Clientes</h2>
        <button className="hover:bg-sky-600 px-2 py-1 rounded shadow-sm bg-sky-700 text-white uppercase">
          Novo cliente
        </button>
      </div>
      <Table columns={columns} data={clientes} />
    </div>
  );
}
