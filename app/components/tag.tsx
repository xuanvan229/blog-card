
type TagProps = {
  label: string;
};

export const Tag = ({ label }: TagProps) => {
  return <div className="inline-flex bg-green-50 border border-green-200 text-green-700 rounded-full px-2 py-[2px] text-sm">{label}</div>;
};
