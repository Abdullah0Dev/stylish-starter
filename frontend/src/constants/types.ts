type SplashTypes = {
  image: string;
  title: string;
  description: string;
};

type FeaturesTypes = {
  image: string;
  title: string;
};

type ProductTypes = {
  image: string;
  title: string;
  description: string;
  price: number;
  priceBeforeDeal: number;
  priceOff: string;
  stars: string;
  numberOfReview: number;
};
type TabBarTypes = {
  title?: string;
  image: string;
  link: string;
  inActiveColor: string;
  activeColor: string;
  inActiveBGColor?: string;
  activeBGColor?: string;
};

export type {SplashTypes, FeaturesTypes, ProductTypes, TabBarTypes};
