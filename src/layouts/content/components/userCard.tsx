import { UserCardProps } from "../../type"

const UserCard = ({ darkNightModeStyle, name, email, type }: UserCardProps) => <div className={`flex justify-between gap-2 border rounded-xl p-3 ${darkNightModeStyle.bg} ${darkNightModeStyle.border}`}>
    <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-red-600" />
        <div>
            <div className="flex items-center gap-2">
                <span className={`${darkNightModeStyle.text} font-semibold text-base`}>{name}</span>
                <span className="text-yellow-600 bg-yellow-50 rounded-lg font-normal p-1 px-2 text-xxs">{type}</span>
            </div>
            <div className={`{${darkNightModeStyle.text}} font-normal text-xs`}>{email}</div>
        </div>
    </div>
    <span className="text-blue-700 font-normal text-xxs">Change Status</span>
</div>

export default UserCard