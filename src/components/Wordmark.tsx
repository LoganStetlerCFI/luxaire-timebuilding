type WordmarkProps = {
  className?: string;
};

const OUTLINE_COLOR = "#0c3b50";

const outlineTextShadow = [
  `-1px -1px 0 ${OUTLINE_COLOR}`,
  `1px -1px 0 ${OUTLINE_COLOR}`,
  `-1px 1px 0 ${OUTLINE_COLOR}`,
  `1px 1px 0 ${OUTLINE_COLOR}`,
  `0 -1.5px 0 ${OUTLINE_COLOR}`,
  `0 1.5px 0 ${OUTLINE_COLOR}`,
  `-1.5px 0 0 ${OUTLINE_COLOR}`,
  `1.5px 0 0 ${OUTLINE_COLOR}`,
].join(", ");

export default function Wordmark({ className }: WordmarkProps) {
  return (
    <span
      className={`flex items-center gap-2 font-extrabold uppercase leading-none tracking-wide text-[#e0ceb0] ${className ?? ""}`}
    >
      <span style={{ textShadow: outlineTextShadow }}>Luxaire</span>
      <span style={{ textShadow: outlineTextShadow }}>Center</span>
    </span>
  );
}
