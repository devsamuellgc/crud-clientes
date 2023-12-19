export function TableBody({ rows }) {
  return (
    <tbody>
      {rows &&
        rows.map((row) => {
          return (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.lastName}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.birthdate}</td>
              <td>
                <div className="flex gap-1 items-center">
                  <button>Editar</button>
                  <button>Deletar</button>
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}
