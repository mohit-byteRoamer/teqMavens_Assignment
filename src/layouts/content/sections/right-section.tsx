import { useState } from "react"
import { ColumnsType } from "antd/es/table"
import { Segmented, Table } from "antd"
import { columns, countryOptions, data, products, RecentOrders, tabList } from "@constants/dummy"
import { Ban, Clock, LayoutGrid, PackageCheck, Sparkles, Truck } from "lucide-react"
import MonthPicker from "@components/monthPicker"
import dayjs from "dayjs"
import RevenueChart from "@components/charts/bar"
import Select from "@components/selector"
import DonutChart from "@components/charts/donut"
import { Product, RecentOrdersType } from "@constants/type"
import { DarkNightModeStylePropsType } from "../../type"
import StatsCardList from "../components/statsCardList"
import RecentActivities from "../components/recentActivities"

const columnsProducts: ColumnsType<Product> = [
    {
        title: 'PRODUCTS',
        dataIndex: 'name',
        key: 'name',
        render: (_, record) => <div className="flex gap-2 items-center">
            <img src={record.image} className="object-contain w-auto h-6 " />
            <span>{record.name} </span>
        </div>
    },
    {
        title: 'SELLS',
        dataIndex: 'sells',
        key: 'sells',
    },
    {
        title: 'CATEGORY',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'PRICE',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'TOTAL REVENUE',
        dataIndex: 'totalRevenue',
        key: 'totalRevenue',
    },
];

const ContentRightSection = ({ darkMode, darkNightModeStyle }: DarkNightModeStylePropsType) => {
    const [activeTab, setActiveTab] = useState("Dashboard")

    const columnsRecentOrder: ColumnsType<RecentOrdersType> = [
        {
            title: 'PRODUCTS',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => <div className="flex gap-2 items-center">
                <img src={record.productImage} className="object-contain w-auto h-6 " />
                <span>{record.product} </span>
            </div>
        },
        {
            title: 'CHANNEL',
            dataIndex: 'sells',
            key: 'sells',
            render: (_, record) => <div className={`flex p-1 justify-center  items-center border ${darkNightModeStyle.bgLGray} ${darkNightModeStyle.border} rounded-full`}>
                <img src={record.platform.logo} className="object-contain w-5 h-auto " />
            </div>
        },
        {
            title: 'CUSTOMER',
            dataIndex: 'category',
            key: 'category',
            render: (_, record) => <div className="flex gap-2 items-center">
                <img src={record.user.avatar} className="object-contain w-auto h-6 rounded-full " />
                <span>{record.user.name} </span>
            </div>
        },
        {
            title: 'TOTAL',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'DELIVERY DATE',
            dataIndex: 'delivery',
            key: 'totalRevenue',
        },
    ];

    const columnsRecentTransactions: ColumnsType<RecentOrdersType> = [

        {
            title: 'TRANSACTION ID',
            dataIndex: 'transactionId',
            key: 'transactionId',
        },
        {
            title: 'PRODUCTS',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => <div className="flex gap-2 items-center">
                <img src={record.productImage} className="object-contain w-auto h-6 " />
                <span>{record.product} </span>
            </div>
        },
        {
            title: 'CHANNEL',
            dataIndex: 'sells',
            key: 'sells',
            render: (_, record) => <div className={`flex p-1 justify-center  items-center border ${darkNightModeStyle.bgLGray} ${darkNightModeStyle.border} rounded-full`}>
                <img src={record.platform.logo} className="object-contain w-5 h-auto " />
            </div>
        },
        {
            title: 'CUSTOMER',
            dataIndex: 'category',
            key: 'category',
            render: (_, record) => <div className="flex gap-2 items-center">
                <img src={record.user.avatar} className="object-contain w-auto h-6 rounded-full " />
                <span>{record.user.name} </span>
            </div>
        },
        {
            title: 'TOTAL',
            dataIndex: 'price',
            key: 'price',
        },
    ];

    return <div className="w-auto flex flex-col">
        {/* T A B S */}
        <div className="flex gap-2 h-10">
            {tabList.map(item => (<span onClick={() => setActiveTab(item)} className={`block cursor-pointer text-sm fles p-2 px-3 border ${item == activeTab && `${darkMode ? `${darkNightModeStyle.bg} text-[#8378ff]` : darkNightModeStyle.bg} border-b-0 ${darkNightModeStyle.border}`}  ${darkNightModeStyle.border} rounded-t-lg`}>{item}</span>))}
        </div>
        <div className={`flex w-[1600px] flex-col gap-6 p-4 ${darkNightModeStyle.bg}`}>

            {/* STATS LIST */}
            <StatsCardList />

            <div className="w-full flex gap-4">
                <div className={`w-[50%] border rounded-lg ${darkNightModeStyle.bgLGray} ${darkNightModeStyle.border} `}>
                    <div className={`border-b ${darkNightModeStyle.border}`}>
                        <div className="flex justify-between items-center p-3">
                            <h2 className={`text-lg font-semibold ${darkNightModeStyle.text}`}>Order Status</h2>
                            <div className="flex gap-2">
                                <Select
                                    className=""
                                    placeholder="All Categories"
                                    options={countryOptions}
                                    value={null}
                                />
                                <MonthPicker value={dayjs()} className="w-[120px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <div className="w-[50%] flex flex-wrap justify-between items-center">
                            <div className="w-[50%] h-[120px] flex items-start p-6 gap-3">
                                <LayoutGrid size={24} className="text-indigo-500" />
                                <div className="flex flex-col gap-2 justify-center">
                                    <span className="text-xs">All</span>
                                    <span className="text-2xl font-semibold">50</span>
                                </div>
                            </div>
                            <div className={`w-[50%] h-[120px] border border-t-0 border-b-0  border-r-0 flex items-start p-6 gap-3 ${darkNightModeStyle.border} `}>
                                <Sparkles size={24} className="text-indigo-500" />
                                <div className="flex flex-col gap-2 justify-center">
                                    <span className="text-xs">New</span>
                                    <span className="text-2xl font-semibold">50</span>
                                </div>
                            </div>
                            <div className={`w-[50%] h-[120px] border border-l-0 border-r-0  flex items-start p-6 gap-3 ${darkNightModeStyle.border} `}>
                                <Clock size={24} className="text-indigo-500" />
                                <div className="flex flex-col gap-2 justify-center">
                                    <span className="text-xs">Pending</span>
                                    <span className="text-2xl font-semibold">50</span>
                                </div>
                            </div>
                            <div className={`w-[50%] h-[120px] border border-r-0  flex items-start p-6 gap-3 ${darkNightModeStyle.border}`}>
                                <Truck size={24} className="text-indigo-500" />
                                <div className="flex flex-col gap-2 justify-center">
                                    <span className="text-xs">Dispatched</span>
                                    <span className="text-2xl font-semibold">50</span>
                                </div>
                            </div>
                            <div className={`w-[50%] h-[120px] flex items-start p-6 gap-3 ${darkNightModeStyle.border}`}>
                                <PackageCheck size={24} className="text-indigo-500" />
                                <div className="flex flex-col gap-2 justify-center">
                                    <span className="text-xs">Delivered</span>
                                    <span className="text-2xl font-semibold">50</span>
                                </div>
                            </div>
                            <div className={`w-[50%] h-[120px] border border-r-0 border-t-0 border-b-0 flex items-start p-6 gap-3 ${darkNightModeStyle.border} `}>
                                <Ban size={24} className="text-indigo-500" />
                                <div className="flex flex-col gap-2 justify-center">
                                    <span className="text-xs">Cancelled</span>
                                    <span className="text-2xl font-semibold">50</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%] flex justify-center">
                            <DonutChart />
                        </div>
                    </div>
                </div>

                <div className={`w-[50%] border rounded-lg ${darkNightModeStyle.bgLGray} ${darkNightModeStyle.border}`}>
                    <div className={`border-b ${darkNightModeStyle.border}`}>
                        <div className="flex justify-between items-center p-3">
                            <h2 className="text-lg font-semibold">Recent Activities</h2>
                            <Segmented
                                options={['Message', 'Email']}
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <RecentActivities />
                    </div>
                </div>
            </div>

            <div className="w-full flex gap-4">
                {/* R E C E N T  O R D E R S */}
                <div className={`w-[50%] border rounded-lg ${darkNightModeStyle.bgLGray}  ${darkNightModeStyle.border}`}>
                    <div className={`border-b ${darkNightModeStyle.border}`}>
                        <div className="flex justify-between items-center p-3 py-2">
                            <h2 className="text-lg font-semibold">Recent Orders</h2>
                        </div>
                    </div>
                    <Table
                        columns={columnsRecentOrder}
                        dataSource={RecentOrders}
                        pagination={false}
                        bordered={false}
                        className="rounded-lg w-full"
                    />
                </div>

                {/* R E C E N T  T R A N S A C T I O N S */}
                <div className={`w-[50%] border rounded-lg ${darkNightModeStyle.bgLGray}  ${darkNightModeStyle.border}`}>
                    <div className={`border-b ${darkNightModeStyle.border}`}>
                        <div className="flex justify-between items-center p-3 py-2">
                            <h2 className="text-lg font-semibold">Recent Transactions</h2>
                        </div>
                    </div>
                    <Table
                        columns={columnsRecentTransactions}
                        dataSource={RecentOrders}
                        pagination={false}
                        bordered={false}
                        className="rounded-lg w-full"
                    />
                </div>
            </div>

            <div className={`w-full border rounded-lg ${darkNightModeStyle.bgLGray} ${darkNightModeStyle.border} `}>
                <div className={`border-b ${darkNightModeStyle.border}`}>
                    <div className="flex justify-between items-center p-3 py-2">
                        <h2 className="text-lg font-semibold">Top Selling Products</h2>
                        <MonthPicker value={dayjs()} className="w-[120px]" />
                    </div>
                </div>
                <Table
                    columns={columnsProducts}
                    dataSource={products}
                    pagination={false}
                    bordered={false}
                    className="rounded-lg w-full"
                />
            </div>

            <div className="w-full flex gap-4">
                <div className={`w-[50%] border rounded-lg ${darkNightModeStyle.bgLGray} ${darkNightModeStyle.border}`}>
                    <div className={`border-b ${darkNightModeStyle.border}`}>
                        <div className="flex justify-between items-center p-3">
                            <Segmented
                                className={`border ${darkNightModeStyle.border} `}
                                options={['Revenue', 'Orders', 'Customers']}
                            />
                            <div className="flex gap-2">
                                <Select
                                    className=""
                                    placeholder="All Categories"
                                    options={countryOptions}
                                    value={null}
                                />
                                <MonthPicker value={dayjs()} className="w-[120px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex p-4 justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Revenue</h2>
                        <span className="text-gray-500 text-sm">Total Revenue: <strong className="text-black">$89,235.89</strong></span>
                    </div>
                    <RevenueChart />
                </div>

                <div className={`w-[50%] border rounded-lg ${darkNightModeStyle.bgLGray} ${darkNightModeStyle.border}`}>
                    <div className={`border-b ${darkNightModeStyle.border}`}>
                        <div className="flex justify-between items-center p-3">
                            <h2 className="text-lg font-semibold">Persons</h2>
                            <MonthPicker value={dayjs()} className="w-[120px]" />
                        </div>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        bordered={false}
                        className="rounded-lg w-full"
                    />
                </div>

            </div>

        </div>
    </div>
}
// 320

export default ContentRightSection