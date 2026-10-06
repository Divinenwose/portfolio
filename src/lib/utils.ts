export const cn = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(" ");

/** Shared cinematic easing curves */
export const ease = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.76, 0, 0.24, 1] as const;
