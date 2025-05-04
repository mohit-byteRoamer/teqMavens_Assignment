
export type CountryOption = {
    label: string;
    value: string;
  };

export interface Product {
    id: number;
    image: string;
    name: string;
    sells: number;
    category: string;
    price: number;
    totalRevenue: number;
}

export interface Person {
    key: string;
    name: string;
    email: string;
    contact: string;
    role: string;
}

export interface RecentOrdersType {
    key: string;
    product: string;
    productImage: string;
    platform: {
        name: string;
        logo: string;
    };
    user: {
        name: string;
        avatar: string;
    };
    price: string;
    delivery?: string;
    transactionId?:string
};
