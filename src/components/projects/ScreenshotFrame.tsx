import Image from "next/image";

/**
 * Browser-style frame around a real screenshot of the live site.
 * The image area is a fixed 16:10 and the shot is cropped from the top (or from `position`),
 * so any screenshot proportion works. Without an image it shows a quiet placeholder.
 */
export default function ScreenshotFrame({
  name,
  live,
  image,
  position,
  sizes = "(min-width: 768px) 55vw, 94vw",
  priority = false,
}: {
  name: string;
  live: string;
  image?: string;
  position?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const host = new URL(live).host.replace(/^www\./, "");
  return (
    <div className="w-full overflow-hidden bg-[#0c0c0e]">
      <div className="flex h-[7.5%] min-h-6 items-center gap-1.5 border-b border-white/[0.07] bg-[#111113] px-3 py-2">
        <i className="h-2 w-2 rounded-full bg-white/15" />
        <i className="h-2 w-2 rounded-full bg-white/15" />
        <i className="h-2 w-2 rounded-full bg-ember" />
        <span className="ml-3 truncate rounded bg-white/5 px-3 py-0.5 font-mono text-[10px] text-white/40">{host}</span>
      </div>
      <div className="relative aspect-[16/10] w-full">
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of the ${name} website`}
            fill
            sizes={sizes}
            priority={priority}
            quality={85}
            className="object-cover"
            style={{ objectPosition: position ?? "50% 0%" }}
          />
        ) : (
          <div className="grid-lines absolute inset-0 flex items-center justify-center opacity-80">
            <span className="rounded-full border border-[var(--line-strong)] bg-ink/70 px-4 py-1.5 font-mono text-[11px] text-mute">
              {host}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
