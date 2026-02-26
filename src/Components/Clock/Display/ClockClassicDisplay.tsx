'use client';

import { useState } from 'react';
import { useCurrentTime } from '@/Hooks/Clock/useCurrentTime';
import DigitalClockFunctionButton from '../Button/DigitalClockFunctionButton';
import BaseLink from '@/Components/Common/BaseLink';
import { ClASSIC_DIGITAL_CLOCK_THEMES, ThemeKey } from '@/Styles/Clock';

const ClockClassicDisplay = () => {
  const [is24Hour, setIs24Hour] = useState(true);
  const [showSeconds, setShowSeconds] = useState(true);
  const [isKorean, setIsKorean] = useState(false);

  // 1. 테마 상태 추가 (기본값 emerald)
  const [theme, setTheme] = useState<ThemeKey>('emerald');
  const currentTheme = ClASSIC_DIGITAL_CLOCK_THEMES[theme];

  const { hours, minutes, seconds, ampm } = useCurrentTime(is24Hour);
  const displayAmPm = isKorean ? (ampm === 'AM' ? '오전' : '오후') : ampm;

  // 2. 색상 순환 핸들러
  const handleColorChange = () => {
    const keys = Object.keys(ClASSIC_DIGITAL_CLOCK_THEMES) as ThemeKey[];
    const currentIndex = keys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % keys.length;
    setTheme(keys[nextIndex]);
  };

  const handleToggle12H = () => setIs24Hour((prev) => !prev);
  const handleToggleSeconds = () => setShowSeconds((prev) => !prev);
  const handleLangSwitch = () => setIsKorean((prev) => !prev);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className={`relative w-full max-w-3xl rounded-3xl p-8 shadow-2xl ring-4 transition-all duration-700 ${currentTheme.bg} ${currentTheme.ring}`}
      >
        {/* 2. LCD 패널: bg-black 위에 테마별 panel 색상을 얹고 border 추가로 베젤과 분리 */}
        <div
          className={`inner-shadow relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-black transition-all duration-700 ${currentTheme.panel} px-8`}
        >
          {/* 3. 메인 LED 숫자 */}
          <div
            className={`flex items-end font-mono leading-none transition-all duration-500 ${currentTheme.text} ${currentTheme.shadow}`}
          >
            <div className="mb-2 flex w-20 justify-end pr-4">
              {!is24Hour ? (
                <span
                  className={`font-bold tracking-tighter uppercase transition-colors duration-500 ${currentTheme.sub} ${isKorean ? 'text-lg' : 'text-xl'}`}
                >
                  {displayAmPm}
                </span>
              ) : (
                <div className="w-full" />
              )}
            </div>

            <div className="flex items-center text-8xl font-black tracking-tighter tabular-nums">
              <span className="w-[1.1em] text-center">{hours}</span>
              {/* 테마 적용: dim 컬러 */}
              <span
                className={`mx-1 animate-pulse transition-colors duration-500 ${currentTheme.dim}`}
              >
                :
              </span>
              <span className="w-[1.1em] text-center">{minutes}</span>
            </div>

            <div className="flex w-48 items-end pl-2">
              {showSeconds && (
                <div className="flex items-end opacity-100 transition-all duration-500">
                  <span
                    className={`mx-1 text-8xl font-black transition-colors duration-500 ${currentTheme.dim}`}
                  >
                    :
                  </span>
                  <span className="w-[1.1em] text-center text-8xl font-black tracking-tighter tabular-nums">
                    {seconds}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 하단 영역 */}
        <div className="relative mt-6 flex h-10 items-center justify-between px-4">
          <div className="z-10 flex items-center gap-4">
            <div className="flex gap-2">
              <DigitalClockFunctionButton onClick={() => {}} title="이미지 전환" />
              <DigitalClockFunctionButton onClick={handleColorChange} title="색상 조절" />
              <DigitalClockFunctionButton onClick={handleLangSwitch} title="한영 전환" />
            </div>
            <span className="text-xs font-bold tracking-widest text-zinc-700 uppercase">Modes</span>
          </div>

          {/* 중앙 로고: 테마에 따른 hover 색상 적용 */}
          <BaseLink
            href="/main"
            text="NEON CHRONO"
            style={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-black uppercase italic tracking-[0.4em] text-zinc-600 transition-all duration-300 active:scale-95 ${currentTheme.hover}`}
          />

          <div className="z-10 flex items-center gap-4">
            <span className="text-xs font-bold tracking-widest text-zinc-700 uppercase">
              Functions
            </span>
            <div className="flex gap-2">
              <DigitalClockFunctionButton onClick={handleToggle12H} title="12/24시간제" />
              <DigitalClockFunctionButton onClick={handleToggleSeconds} title="초 표시" />
              <DigitalClockFunctionButton onClick={() => {}} title="스타일 변경" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockClassicDisplay;
