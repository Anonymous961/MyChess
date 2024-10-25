export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-700 px-8 py-6 text-white font-bold py-2 rounded"
    >
      {children}
    </button>
  );
};
