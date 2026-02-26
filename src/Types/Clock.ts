export interface ClockProps {
  hours: string;
  minutes: string;
  seconds: string;
  showSeconds: boolean;
  ampm?: string;
  is24Hour: boolean;
  onToggle12H: () => void;
  onToggleSeconds: () => void;
  onToggleDigitalStyle: () => void;
}

export interface ClockButtonProps {
  onClick?: () => void;
  title?: string;
}
