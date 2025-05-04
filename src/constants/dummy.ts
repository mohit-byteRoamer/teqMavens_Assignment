import { ColumnsType } from "antd/es/table";
import { CountryOption, Person, Product, RecentOrdersType } from "./type";
import { Package } from "lucide-react";

export const countryOptions: CountryOption[] = [
    { label: '🇺🇸 US', value: '+1' },
    { label: '🇬🇧 UK', value: '+44' },
    { label: '🇨🇦 CA', value: '+1-CA' },
    { label: '🇦🇺 AU', value: '+61' },
    { label: '🇮🇳 IN', value: '+91' },
    { label: '🇩🇪 DE', value: '+49' },
    { label: '🇫🇷 FR', value: '+33' },
    { label: '🇯🇵 JP', value: '+81' },
    { label: '🇸🇬 SG', value: '+65' },
    { label: '🇧🇷 BR', value: '+55' },
];

export const tabList = ["Dashboard", 'Orders', 'Address', 'Notes', 'Tasks', 'Contacts', 'Credit History']

export const products: Product[] = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=50",
        name: "iPhone 15 pro max",
        sells: 156,
        category: "Mobile",
        price: 40.00,
        totalRevenue: 6240.00
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=50",
        name: "White Denim Tshit M Size",
        sells: 139,
        category: "Clothes",
        price: 15.00,
        totalRevenue: 2085.00
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=50",
        name: "David Beckham classic Blue Perfume",
        sells: 125,
        category: "Perfume",
        price: 16.00,
        totalRevenue: 1167.00
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=50",
        name: "Samsung i-20 series smart watch",
        sells: 167,
        category: "Watch",
        price: 26.00,
        totalRevenue: 2262.00
    },
    {
        id: 5,
        image: "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=50",
        name: "Nykaa Red lipstick",
        sells: 110,
        category: "Beauty",
        price: 31.00,
        totalRevenue: 3319.00
    }
];

export const data: Person[] = [
    {
        key: '1',
        name: 'Luisa Winters',
        email: 'Joneshighman@gmail.com',
        contact: '+1(671) 555-0110',
        role: 'Manager',
    },
    {
        key: '2',
        name: 'Syed Dean',
        email: 'Fisherman12@gmail.com',
        contact: '+1(671) 555-0110',
        role: 'Worker',
    },
    {
        key: '3',
        name: 'Hector Sheppard',
        email: 'Janecooper@gmail.com',
        contact: '+1(671) 555-0110',
        role: 'Manager',
    },
    {
        key: '4',
        name: 'Freya Perry',
        email: 'Savannahbae@yahoo.com',
        contact: '+1(671) 555-0110',
        role: 'Worker',
    },
    {
        key: '5',
        name: 'Ted Garza',
        email: 'Janecooper@gmail.com',
        contact: '+1(671) 555-0110',
        role: 'Manager',
    },
    {
        key: '6',
        name: 'Preston Woods',
        email: 'Fisherman12@gmail.com',
        contact: '+1(671) 555-0110',
        role: 'Worker',
    },
    {
        key: '7',
        name: 'Nikita Houston',
        email: 'Ester123@gmail.com',
        contact: '+1(671) 555-0110',
        role: 'Worker',
    },
    {
        key: '8',
        name: 'Derek Knight',
        email: 'derek.knight@mail.com',
        contact: '+1(671) 555-0111',
        role: 'Manager',
    },
    {
        key: '9',
        name: 'Melissa Cohen',
        email: 'melissac@example.com',
        contact: '+1(671) 555-0112',
        role: 'Worker',
    },
    {
        key: '10',
        name: 'Jasper Lane',
        email: 'jasper.lane@mail.com',
        contact: '+1(671) 555-0113',
        role: 'Manager',
    },
    {
        key: '11',
        name: 'Chloe Barrett',
        email: 'chloe_b@example.com',
        contact: '+1(671) 555-0114',
        role: 'Worker',
    },
];

export const columns: ColumnsType<Person> = [
    {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'CONTACT NUMBER',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'ROLE',
        dataIndex: 'role',
        key: 'role',
    },
];

export const RecentOrders: RecentOrdersType[] = [
    {
        key: '1',
        product: 'iPhone 15 Pro Max',
        productImage: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=50',
        platform: { name: 'eBay', logo: 'https://w7.pngwing.com/pngs/325/220/png-transparent-ebay-logo-ebay-online-shopping-amazon-com-sales-ebay-logo-text-logo-donation.png' },
        user: { name: 'Gabriella Holland', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
        price: '$400.00',
        delivery: 'Today',
        transactionId: "12312381273198"
    },
    {
        key: '2',
        product: 'White Denim Tshirt Men',
        productImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
        platform: { name: 'Walmart', logo: 'https://logo.clearbit.com/walmart.com' },
        user: { name: 'Harris Sandoval', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
        price: '$151.00',
        delivery: 'Today',
        transactionId: "12312381273198"

    },
    {
        key: '3',
        product: 'David Beckham Classic Perfume',
        productImage: 'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=50',
        platform: { name: 'Facebook', logo: 'https://logo.clearbit.com/facebook.com' },
        user: { name: 'Lilia Ponce', avatar: 'https://randomuser.me/api/portraits/women/48.jpg' },
        price: '$167.00',
        delivery: 'Tomorrow',
        transactionId: "12312381273198"

    },
    {
        key: '4',
        product: 'Samsung i-20 Smartwatch',
        productImage: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
        platform: { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
        user: { name: 'Rehan Charles', avatar: 'https://randomuser.me/api/portraits/men/52.jpg' },
        price: '$262.00',
        delivery: 'Tomorrow',
        transactionId: "12312381273198"

    },
    {
        key: '5',
        product: 'Nykaa Red Lipstick',
        productImage: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=50',
        platform: { name: 'Etsy', logo: 'https://logo.clearbit.com/etsy.com' },
        user: { name: 'Maxim Brown', avatar: 'https://randomuser.me/api/portraits/men/58.jpg' },
        price: '$319.00',
        delivery: '05/01/2023',
        transactionId: "12312381273198"

    },
];

export const cardData = Array.from({ length: 9 }).map((_, i) => ({
    key: i,
    label: 'Total Orders',
    number: 123,
    duration: 'From The Last Month',
    Icon: Package,
    statsCount: '28%',
    statsStatus: 'profit',
}));