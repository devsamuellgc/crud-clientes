import { TableBody } from "./components/TableBody";
import { TableHeader } from "./components/TableHeader";

export function Table({ columns, data }) {
  return (
    <table>
      <TableHeader header={columns} />
      <TableBody rows={data} />
    </table>
  );
}
