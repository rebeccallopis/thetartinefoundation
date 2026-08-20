type ToastMarkProps = {
  className?: string;
  mode?: "color" | "one-color" | "light-bg" | "dark-bg";
};

/**
 * Toast mark: a slice of bread with a small colorful handprint painted on
 * it — literally "art on toast," per the brief's request for a mark that
 * combines a loaf/slice of bread with colorful painted hands. No face, no
 * mascot pose — an original composition, not a character illustration.
 * `mode` swaps the palette for print/social contexts (favicon, dark headers).
 */
export function ToastMark({ className, mode = "color" }: ToastMarkProps) {
  const monochrome = mode === "one-color" || mode === "dark-bg";
  const crust = monochrome ? "currentColor" : "#6A3218";
  const fill = monochrome ? "currentColor" : "#F6B83F";
  const fillOpacity = monochrome ? 0.85 : 1;
  const dabOpacity = monochrome ? 0.55 : 1;
  const dabs = monochrome
    ? ["currentColor", "currentColor", "currentColor", "currentColor"]
    : ["#F26F55", "#56B9AF", "#E9848F", "#F8F3E8"];

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="tARTine toast mark"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* bread crust — single soft arch, no bread-mascot notches */}
      <path
        d="M100 18
           C146 18, 172 46, 172 84
           L172 148
           C172 158, 164 166, 154 166
           L46 166
           C36 166, 28 158, 28 148
           L28 84
           C28 46, 54 18, 100 18 Z"
        fill={crust}
      />
      {/* toasted interior */}
      <path
        d="M100 34
           C136 34, 156 56, 156 84
           L156 142
           C156 149, 150 154, 143 154
           L57 154
           C50 154, 44 149, 44 142
           L44 84
           C44 56, 64 34, 100 34 Z"
        fill={fill}
        fillOpacity={fillOpacity}
      />
      {/* small painted handprint — four finger dabs + a palm dab */}
      <g opacity={dabOpacity}>
        <ellipse cx="78" cy="76" rx="7" ry="11" fill={dabs[0]} transform="rotate(-18 78 76)" />
        <ellipse cx="96" cy="68" rx="7" ry="12" fill={dabs[1]} transform="rotate(-4 96 68)" />
        <ellipse cx="115" cy="70" rx="7" ry="11" fill={dabs[2]} transform="rotate(10 115 70)" />
        <ellipse cx="131" cy="78" rx="6.5" ry="10" fill={dabs[0]} transform="rotate(22 131 78)" />
        <ellipse cx="103" cy="100" rx="24" ry="19" fill={dabs[1]} />
      </g>
      {/* a couple of stray drips, echoing the "spreading" motion */}
      <circle cx="66" cy="128" r="4" fill={dabs[2]} opacity={dabOpacity} />
      <circle cx="128" cy="132" r="3" fill={dabs[0]} opacity={dabOpacity} />
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
  mode?: "color" | "one-color" | "light-bg" | "dark-bg";
};

/**
 * "tARTine" wordmark with ART emphasized — matches the brand reference where
 * each letter group takes a different palette color.
 */
export function Wordmark({ className, mode = "color" }: WordmarkProps) {
  if (mode === "one-color" || mode === "dark-bg") {
    return (
      <span className={`font-display font-bold ${className ?? ""}`}>
        t<span className="uppercase">ART</span>ine
      </span>
    );
  }
  return (
    <span className={`font-display font-bold ${className ?? ""}`}>
      <span className="text-toast-dark">t</span>
      <span className="text-coral">ART</span>
      <span className="text-toast-dark">ine</span>
    </span>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  mode?: "color" | "one-color" | "light-bg" | "dark-bg";
};

/** Full lockup: mark + wordmark, used in the header and footer. */
export function Logo({ className, markClassName, wordmarkClassName, mode }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <ToastMark className={markClassName ?? "h-9 w-9"} mode={mode} />
      <Wordmark className={wordmarkClassName ?? "text-2xl"} mode={mode} />
    </span>
  );
}

/** Circular badge version — for social profile images and stamps. */
/**
 * Stamp-style badge — a rounded square, mark stacked above a horizontal
 * wordmark, single thin rule beneath. Deliberately not a circle-with-arched-
 * text layout, so it reads as its own composition for social profile images
 * and print stamps rather than a badge-shaped variant of one fixed motif.
 */
export function LogoBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label="tARTine badge logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="8" width="224" height="224" rx="36" fill="#F8F3E8" />
      <rect x="8" y="8" width="224" height="224" rx="36" fill="none" stroke="#6A3218" strokeWidth="3" />
      <g transform="translate(70 26) scale(0.5)">
        <ToastMark className="" />
      </g>
      <text
        x="120"
        y="172"
        textAnchor="middle"
        fontFamily="var(--font-baloo), sans-serif"
        fontWeight="700"
        fontSize="30"
      >
        <tspan fill="#3A1E13">t</tspan>
        <tspan fill="#F26F55">ART</tspan>
        <tspan fill="#3A1E13">ine</tspan>
      </text>
      <rect x="76" y="188" width="88" height="3" rx="1.5" fill="#F6B83F" />
      <text
        x="120"
        y="210"
        textAnchor="middle"
        fontFamily="var(--font-baloo), sans-serif"
        fontWeight="600"
        fontSize="11"
        letterSpacing="2"
        fill="#56B9AF"
      >
        EXPLORE · EXPERIMENT · CREATE
      </text>
    </svg>
  );
}
