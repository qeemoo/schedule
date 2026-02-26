import { ClockButtonProps } from '@/Types/Clock';

const DigitalClockFunctionButton = ({ onClick, title }: ClockButtonProps) => (
  <button
    onClick={onClick}
    title={title}
    className="h-6 w-6 cursor-pointer rounded-full bg-zinc-800 shadow-md ring-2 ring-zinc-900 transition-none hover:brightness-125 active:scale-90 active:bg-zinc-700"
  />
);

export default DigitalClockFunctionButton;
