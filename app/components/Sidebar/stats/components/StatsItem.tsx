interface StatItemProps {
  label: string;
  value: number;
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="flex justify-between items-center py-3 px-4 first:pt-3 last:pb-3">
      <span className="text-heading text-md font-normal">{label}</span>
      <span className="text-primary text-md font-normal">{value}</span>
    </div>
  );
}

export default StatItem;
