export const ClASSIC_DIGITAL_CLOCK_THEMES = {
  emerald: {
    bg: 'bg-zinc-950', // 깊고 어두운 검은색 베젤
    panel: 'bg-emerald-900/10', // 대비를 위한 은은한 다크 그린 패널
    text: 'text-emerald-400', // 메인 숫자
    dim: 'text-emerald-500/20', // 콜론 등 흐린 글자
    sub: 'text-emerald-500/40', // AM/PM
    shadow: 'drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]',
    hover: 'hover:text-emerald-400',
    ring: 'ring-emerald-900/30', // 베젤 외곽에 흐르는 그린 라인
  },
  amber: {
    bg: 'bg-stone-950', // 따뜻한 톤의 블랙 베젤
    panel: 'bg-amber-900/10', // 다크 오렌지 패널
    text: 'text-amber-400',
    dim: 'text-amber-500/20',
    sub: 'text-amber-500/40',
    shadow: 'drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]',
    hover: 'hover:text-amber-400',
    ring: 'ring-amber-900/30', // 베젤 외곽에 흐르는 앰버 라인
  },
  rose: {
    bg: 'bg-neutral-950', // 중성적인 블랙 베젤
    panel: 'bg-rose-900/10', // 다크 로즈 패널
    text: 'text-rose-400',
    dim: 'text-rose-500/20',
    sub: 'text-rose-500/40',
    shadow: 'drop-shadow-[0_0_15px_rgba(251,113,133,0.5)]',
    hover: 'hover:text-rose-400',
    ring: 'ring-rose-900/30', // 베젤 외곽에 흐르는 로즈 라인
  },
  blue: {
    bg: 'bg-slate-950', // 차가운 톤의 네이비 베젤
    panel: 'bg-blue-900/10', // 다크 블루 패널
    text: 'text-blue-400',
    dim: 'text-blue-500/20',
    sub: 'text-blue-500/40',
    shadow: 'drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]',
    hover: 'hover:text-blue-400',
    ring: 'ring-blue-900/30', // 베젤 외곽에 흐르는 블루 라인
  },
};

export type ThemeKey = keyof typeof ClASSIC_DIGITAL_CLOCK_THEMES;
