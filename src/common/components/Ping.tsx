export const Ping = ({ className }: { className?: string }) => {
  return (
    <span className={`relative flex h-3 w-3 ${className ?? ''}`}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
    </span>
  );
};
