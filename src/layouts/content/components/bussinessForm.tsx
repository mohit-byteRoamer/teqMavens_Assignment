import { ChevronDown, ChevronUp, Plus, RotateCw, Save } from "lucide-react"
import Input from "@components/input"
import { Divider } from "antd"
import Select from "@components/selector"
import { countryOptions } from "@constants/dummy"
import Button from "@components/button"
import { DarkNightModeStylePropsType } from "../../type"

const BussinessForm = ({ darkNightModeStyle }: DarkNightModeStylePropsType) => <div className={`flex flex-col justify-between gap-2 border rounded-xl p-3 ${darkNightModeStyle.bg} ${darkNightModeStyle.border}`}>
    <div className="w-full flex justify-between items-center">
        <span className="font-semibold">Business Details</span>
        <div className="text-green-500 flex gap-1 items-center">
            <Save size={18} />
            <span className="text-xs font-semibold">Save & Close</span>
        </div>
    </div>
    <div className="mt-1.5">
        <Input label="Account Name" placeholder="Account Name" labelStyle="block text-xs mb-1" />
        <Divider className={`!my-3 ${darkNightModeStyle.bg}`} />
        <Input label="Email" placeholder="Email" labelStyle="block text-xs mb-1" />
        <Divider className={`!my-3 ${darkNightModeStyle.bg}`} />
        <div>
            <div className="flex justify-between items-center">
                <label className="block text-xs mb-1" >Phone Number</label>
                <Plus size={20} className="text-blue-600" />
            </div>
            <div className="flex mt-3 gap-2 ">
                <Select
                    className="!w-[25%]"
                    defaultValue={"+91"}
                    options={countryOptions}
                    labelStyle="block text-xs mb-1"
                />
                <Input
                    className="!w-[50%]"
                    placeholder="Phone number"
                    size="middle"
                    prefix={<span className="text-black">+91</span>}
                />
                <Button type="default" className="border-red-500 flex justify-center items-center" label="Delete" labelStyle="block text-red-500 mb-1" />
            </div>
        </div>
        <Divider className={`!my-3 ${darkNightModeStyle.bg}`} />

        <Select
            label="Contact Owner"
            placeholder="Contact Owner"
            value={null}
            options={[
                { label: "mohit878421@gmail.com", value: "mohit878421@gmail.com" },
                { label: "mohit878421@gmail.com", value: "mohit878421@gmail.com" },
                { label: "mohit878421@gmail.com", value: "mohit878421@gmail.com" }
            ]}
            labelStyle="block text-xs mb-1"
        />
        <Divider className={`!my-3 ${darkNightModeStyle.bg}`} />
        <Select
            label="Company Type"
            placeholder="Company Type"
            value={null}
            options={[
                { label: "mohit878421@gmail.com", value: "mohit878421@gmail.com" },
                { label: "mohit878421@gmail.com", value: "mohit878421@gmail.com" },
                { label: "mohit878421@gmail.com", value: "mohit878421@gmail.com" }
            ]}
            labelStyle="block text-xs mb-1"
        />
        <Divider className={`!my-3 ${darkNightModeStyle.bg}`} />
        <Select
            label="Industry"
            placeholder="Industry"
            value={null}
            options={[
                { label: "mohit878421@gmail.com", value: "mohit878421@gmail.com" },
                { label: "mohit878421@gmail.com", value: "mohit878421@gmail.com" },
                { label: "mohit878421@gmail.com", value: "mohit878421@gmail.com" }
            ]}
            labelStyle="block text-xs mb-1"
        />
        <Divider className={`!my-3 ${darkNightModeStyle.bg}`} />
        <Input className="counterInput" placeholder="No. Of Employee" label="No. Of Employee" labelStyle="block text-xs mb-1" suffix={<div className="w-[20px]">
            <div className="bg-[#f6f8f9] w-full flex justify-center">
                <ChevronUp size={12} className="text-gray-500 cursor-pointer" />
            </div>
            <div className="bg-[#f6f8f9] w-full flex justify-center">
                <ChevronDown size={12} className="text-gray-500 cursor-pointer" />
            </div>
        </div>} />
        <Divider className={`!my-3 ${darkNightModeStyle.bg}`} />
        <div className="flex justify-between">
            <div>
                <label className="block text-xxs mb-1" >CREDIT LIMIT</label>
                <span className="block text-sm font-medium mb-1" >$ 806.71</span>
            </div>
            <Plus size={20} className="text-blue-600" />
        </div>
        <Divider className={`!my-3 ${darkNightModeStyle.bg}`} />
        <div className="flex justify-between">
            <div>
                <label className="block text-xxs mb-1" >AVAILABLE CREDIT</label>
                <span className="block text-sm font-medium mb-1" >$ 806.71</span>
            </div>
            <RotateCw size={20} className="text-blue-600" />
        </div>
    </div>
</div>

export default BussinessForm