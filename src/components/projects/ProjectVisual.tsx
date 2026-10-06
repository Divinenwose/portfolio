import type { VisualKind } from "@/lib/data";

/**
 * Hand-built interface mock-ups, drawn in code at 640×400.
 * Swap any of these for a real screenshot: <Image src="/projects/x.png" … />.
 */

function Chrome({ url, light, children }: { url: string; light?: boolean; children: React.ReactNode }) {
  return (
    <div className={`h-full w-full overflow-hidden ${light ? "bg-[#efece4] text-[#111]" : "bg-[#0c0c0e] text-bone"}`}>
      <div className={`flex h-8 items-center gap-1.5 border-b px-3 ${light ? "border-black/10 bg-[#e6e2d8]" : "border-white/[0.07] bg-[#111113]"}`}>
        <i className={`h-2 w-2 rounded-full ${light ? "bg-black/20" : "bg-white/15"}`} />
        <i className={`h-2 w-2 rounded-full ${light ? "bg-black/20" : "bg-white/15"}`} />
        <i className="h-2 w-2 rounded-full bg-ember" />
        <span className={`ml-3 rounded px-3 py-0.5 font-mono text-[9px] ${light ? "bg-black/5 text-black/50" : "bg-white/5 text-white/40"}`}>{url}</span>
      </div>
      <div className="relative h-[368px] w-full">{children}</div>
    </div>
  );
}

function Venofa() {
  return (
    <Chrome url="venofateq.com">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ember/30 blur-3xl" />
      <div className="relative flex items-center justify-between px-8 py-5">
        <b className="text-sm tracking-tight">VENOFA<span className="text-ember">TEQ</span></b>
        <div className="flex items-center gap-5 text-[10px] text-white/50"><span>Services</span><span>Work</span><span>Team</span><span className="rounded-full bg-ember px-3 py-1 text-black">Contact</span></div>
      </div>
      <div className="relative grid grid-cols-[1.25fr_1fr] gap-6 px-8 pt-8">
        <div>
          <p className="text-[38px] font-semibold leading-[1] tracking-[-0.04em]">Software that moves <span className="text-white/40">business forward.</span></p>
          <p className="mt-4 max-w-[240px] text-[10px] leading-relaxed text-white/45">Product engineering, web platforms and digital systems built to scale.</p>
          <div className="mt-6 flex gap-2"><span className="rounded-full bg-ember px-4 py-2 text-[10px] font-medium text-black">Start a project</span><span className="rounded-full border border-white/20 px-4 py-2 text-[10px]">Our work</span></div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 font-mono text-[9px] leading-[1.9] text-white/50">
          <span className="text-[#ff7a3d]">const</span> stack = [<br />&nbsp;&nbsp;<span className="text-white/80">&quot;React&quot;</span>, <span className="text-white/80">&quot;Node&quot;</span>,<br />&nbsp;&nbsp;<span className="text-white/80">&quot;Cloud&quot;</span><br />];<br /><span className="text-[#ff7a3d]">await</span> ship();
        </div>
      </div>
      <div className="absolute inset-x-8 bottom-6 grid grid-cols-4 gap-3">
        {["Web", "Mobile", "Cloud", "Design"].map((t) => <div key={t} className="rounded-md border border-white/10 px-3 py-3 text-[10px] text-white/60">{t}</div>)}
      </div>
    </Chrome>
  );
}

function Storely() {
  const bars = [38, 52, 44, 66, 58, 80, 62, 90, 74, 96, 70, 84];
  return (
    <Chrome url="app.storely.io/dashboard">
      <div className="absolute inset-y-0 left-0 w-[58px] border-r border-white/[0.07] bg-[#0f0f11] py-5">
        <div className="mx-auto mb-6 h-6 w-6 rounded-md bg-ember" />
        {[0, 1, 2, 3, 4].map((i) => <div key={i} className={`mx-auto mb-4 h-4 w-4 rounded-[3px] ${i === 0 ? "bg-white/70" : "bg-white/15"}`} />)}
      </div>
      <div className="absolute inset-y-0 left-[58px] right-0 p-6">
        <div className="mb-5 flex items-center justify-between"><b className="text-base tracking-tight">Overview</b><span className="rounded-md border border-white/10 px-3 py-1 text-[9px] text-white/50">Last 30 days</span></div>
        <div className="grid grid-cols-3 gap-3">
          {[["Revenue", "₦4.82M", "+12.4%"], ["Orders", "1,284", "+8.1%"], ["In stock", "96%", "-1.2%"]].map(([a, b, c]) => (
            <div key={a} className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-3"><p className="text-[9px] text-white/40">{a}</p><p className="mt-1 text-xl font-semibold tracking-tight">{b}</p><p className={`text-[9px] ${c.startsWith("-") ? "text-white/40" : "text-ember"}`}>{c}</p></div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-[1.6fr_1fr] gap-3">
          <div className="flex h-[176px] items-end gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.025] p-3">
            {bars.map((h, i) => <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-sm ${i === 9 ? "bg-ember" : "bg-white/15"}`} />)}
          </div>
          <div className="space-y-2 rounded-lg border border-white/[0.08] bg-white/[0.025] p-3">
            {["Sneakers", "Backpack", "Watch", "Lamp"].map((n, i) => (
              <div key={n} className="flex items-center justify-between text-[9px] text-white/60"><span>{n}</span><span className="h-1 rounded-full bg-ember/80" style={{ width: 52 - i * 10 }} /></div>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function Carteon() {
  return (
    <Chrome url="carteon.me/divine" light>
      <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-ember/25 blur-2xl" />
      <div className="relative flex h-full items-center px-10">
        <div className="w-[300px]">
          <p className="text-[40px] font-semibold leading-[0.98] tracking-[-0.045em]">Your identity,<br />one tap.</p>
          <p className="mt-4 text-[10px] leading-relaxed text-black/55">Create a digital business card, share it with a scan, update it anytime.</p>
          <span className="mt-5 inline-block rounded-full bg-black px-4 py-2 text-[10px] text-white">Create my card</span>
        </div>
        <div className="absolute right-12 top-6 h-[330px] w-[168px] rounded-[26px] border-[5px] border-[#111] bg-white p-3 shadow-2xl" style={{ transform: "rotate(5deg)" }}>
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-black/15" />
          <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-ember to-[#ffb08a]" />
          <p className="mt-2 text-center text-[11px] font-semibold">Ada Okafor</p>
          <p className="text-center text-[8px] text-black/50">Product Designer</p>
          <div className="mt-3 space-y-1.5">{["Call", "Email", "Website"].map((t) => <div key={t} className="rounded-md bg-black/[0.06] py-1.5 text-center text-[8px]">{t}</div>)}</div>
          <div className="mx-auto mt-3 grid h-14 w-14 grid-cols-7 gap-px">
            {Array.from({ length: 49 }).map((_, i) => <i key={i} className={`${(i * 7 + (i % 3)) % 3 === 0 || i % 8 === 0 ? "bg-black" : "bg-black/10"}`} />)}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function Elevouth() {
  return (
    <Chrome url="elevouth.com">
      <div className="absolute left-1/2 top-[-60px] h-[300px] w-[300px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(circle at 35% 35%, #ff7a3d, #ff5100 40%, #3a1200 75%, transparent 76%)", filter: "blur(1px)" }} />
      <div className="relative flex items-center justify-between px-8 py-5 text-[10px] text-white/70"><b className="text-sm">elevouth</b><div className="flex gap-5"><span>Platform</span><span>Learn</span><span>Community</span></div></div>
      <div className="relative mt-10 text-center">
        <p className="text-[56px] font-semibold leading-[0.95] tracking-[-0.05em] mix-blend-difference">Elevate<br />what&apos;s next.</p>
      </div>
      <div className="absolute inset-x-8 bottom-6 grid grid-cols-3 gap-3">
        {["Build", "Learn", "Launch"].map((t, i) => (
          <div key={t} className="rounded-lg border border-white/10 bg-black/40 p-3 backdrop-blur"><p className="text-[11px] font-medium">{t}</p><div className="mt-2 h-1 w-full rounded-full bg-white/10"><div className="h-1 rounded-full bg-ember" style={{ width: `${40 + i * 25}%` }} /></div></div>
        ))}
      </div>
    </Chrome>
  );
}

function Portal() {
  const rows = [["Mathematics", 88, "A"], ["English", 79, "B"], ["Physics", 91, "A"], ["Chemistry", 74, "B"], ["Biology", 82, "A"]] as const;
  return (
    <Chrome url="results.school.edu.ng" light>
      <div className="px-8 pt-6">
        <div className="flex items-end justify-between border-b border-black/15 pb-3">
          <div><p className="text-[9px] text-black/50">Terminal result · Second term</p><p className="text-2xl font-semibold tracking-tight">Chidi Eze</p></div>
          <div className="text-right text-[9px] text-black/50">Class SS2<br />ID 2024/0147</div>
        </div>
        <div className="mt-3 divide-y divide-black/10 text-[11px]">
          <div className="grid grid-cols-[1fr_60px_50px] py-1.5 text-[9px] text-black/45"><span>Subject</span><span>Score</span><span>Grade</span></div>
          {rows.map(([s, n, g]) => (
            <div key={s} className="grid grid-cols-[1fr_60px_50px] items-center py-2"><span>{s}</span><span className="tabular-nums">{n}</span><span className={`w-fit rounded px-2 py-0.5 text-[9px] font-semibold ${g === "A" ? "bg-ember text-black" : "bg-black/10"}`}>{g}</span></div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-md bg-[#111] px-4 py-3 text-white"><span className="text-[10px] text-white/60">Average</span><b className="text-lg tabular-nums">82.8</b><span className="rounded-full bg-ember px-3 py-1 text-[9px] font-medium text-black">Download PDF</span></div>
      </div>
    </Chrome>
  );
}

function Carneiz() {
  return (
    <Chrome url="carneiz.com">
      <div className="absolute inset-0 bg-[#e84a00]" />
      <div className="relative flex items-center justify-between px-8 py-5 text-[10px] font-medium text-black"><b>CARNEIZ</b><div className="flex gap-5"><span>Index</span><span>Studio</span><span>Contact</span></div></div>
      <p className="relative px-6 text-[118px] font-bold leading-[0.82] tracking-[-0.07em] text-black">CARNE<br />IZ<span className="text-bone">.</span></p>
      <div className="absolute bottom-6 right-8 flex gap-3">
        <div className="h-24 w-20 rounded-sm bg-black" /><div className="mt-6 h-24 w-20 rounded-sm bg-bone" />
        <div className="h-24 w-20 rounded-sm bg-gradient-to-br from-[#2a0f00] to-black" />
      </div>
      <p className="absolute bottom-6 left-8 max-w-[170px] text-[10px] leading-relaxed text-black/80">A modern web experience, led by type and motion.</p>
    </Chrome>
  );
}

const map: Record<VisualKind, () => React.JSX.Element> = {
  venofa: Venofa, storely: Storely, carteon: Carteon, elevouth: Elevouth, portal: Portal, carneiz: Carneiz,
};

export default function ProjectVisual({ kind }: { kind: VisualKind }) {
  const V = map[kind];
  return <V />;
}
