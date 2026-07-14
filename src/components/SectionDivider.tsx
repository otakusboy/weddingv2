export function SectionDivider() {
  return (
    <div className="flex justify-center" role="separator" aria-hidden="true">
      <svg
        viewBox="0 0 300 14"
        className="h-3.5 w-full max-w-[300px] text-amber-950"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 7.2 C18 4.1, 34 9.8, 52 6.5 C68 3.6, 84 10.2, 102 7 C118 4.2, 134 9.4, 152 6.8 C168 4.5, 184 10.1, 202 7.1 C218 4.4, 234 9.6, 252 6.6 C268 4.2, 284 9.2, 298 6.8"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </svg>
    </div>
  )
}
