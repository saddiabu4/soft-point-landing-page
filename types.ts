
export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  features: {
    text: string;
    included: boolean;
    value: string;
  }[];
  isFeatured?: boolean;
}
