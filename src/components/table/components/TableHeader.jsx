export function TableHeader({ header }) {
  return (
    <thead>
      <tr>{header && header.map((value) => <th key={value}>{value}</th>)}</tr>
    </thead>
  );
}
