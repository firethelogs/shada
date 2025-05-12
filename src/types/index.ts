export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface CountdownTimerProps {
  targetDate: Date;
}

export interface NewsletterProps {
  onSubmit: (email: string) => void;
}

export interface HeroProps {
  title: string;
  subtitle: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}