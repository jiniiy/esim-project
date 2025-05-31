type Plan = {
  id: number;
  name: string;
  price: number;
  dataVolume: string;
  dataUnit: string;
  validityDays: number;
  validityDaysCycle: string;
  country?: {
    name: string;
    code: string;
  };
};

type FetchedPlans = {
  FIXED_DAY: Plan[];
  PER_DAY: Plan[];
};

export type { Plan, FetchedPlans };
