import { CalendarDays, Mail, MessageCircle, PhoneCall } from "lucide-react"
import { DarkNightModeStylePropsType } from "../../type"

const Social = ({ darkNightModeStyle }: DarkNightModeStylePropsType) =>
    <div className={`flex justify-between gap-2 border rounded-xl py-3 px-5 ${darkNightModeStyle.bg} ${darkNightModeStyle.border}`}>
        <div className="flex items-center gap-1.5">
            <div className="flex flex-col items-center gap-3 mx-4">
                <Mail size={20} />
                <span className="text-xxs">Email</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
        </div>
        <div className="flex items-center gap-1.5">
            <div className="flex flex-col items-center gap-3 mx-5">
                <PhoneCall size={20} />
                <span className="text-xxs">Call</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
        </div>
        <div className="flex items-center gap-1.5">
            <div className="flex flex-col items-center gap-3 mx-5">
                <MessageCircle size={20} />
                <span className="text-xxs">Message</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
        </div>
        <div className="flex items-center gap-1.5">
            <div className="flex flex-col items-center gap-3 mx-5">
                <CalendarDays size={20} />
                <span className="text-xxs">Calendar</span>
            </div>
        </div>
    </div>


export default Social