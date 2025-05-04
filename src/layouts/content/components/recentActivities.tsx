import React from 'react';
import { Steps } from 'antd';
import { MessageCircleMore, Undo } from 'lucide-react';

const description = 'This is a description.';

const RecentActivities: React.FC = () => (
  <>
    <div>
      <label className='block font-medium text-xs !mb-2'>TODAY</label>
      <Steps
        direction="vertical"
        size="small"
        current={1}
        items={[
          {
            title: (<span><span className='text-blue-700'>Christian Wood</span> Send message to <span className='text-blue-700'>Nikita Houston</span> : 1 min ago </span>),
            description: (
              <div className="flex items-center gap-2">
                <div className='bg-[#dfe4e7] rounded-full p-1'>
                  <Undo size={14} className="text-gray-600" />
                </div>
                <span>This is a description.</span>
              </div>
            ),
            icon: <div className='bg-yellow-500 rounded-full p-1'>
              <MessageCircleMore size={15} className='text-white' />
            </div>
          },
          {
            title: 'In Progress',
            description,
            icon: <div className='bg-pink-600 rounded-full p-1'>
              <MessageCircleMore size={15} className='text-white' />
            </div>
          },
        ]}
      />
      <label className='block font-medium text-xs !mb-2'>YESTERDAY</label>
      <Steps
        direction="vertical"
        size="small"
        current={1}
        items={[
          {
            title: (<span><span className='text-blue-700'>Christian Wood</span> Send message to <span className='text-blue-700'>Nikita Houston</span> : 1 min ago </span>),
            description: (
              <div className="flex items-center gap-2">
                <div className='bg-[#dfe4e7] rounded-full p-1'>
                  <Undo size={14} className="text-gray-600" />
                </div>
                <span>This is a description.</span>
              </div>
            ),
            icon: <div className='bg-yellow-500 rounded-full p-1'>
              <MessageCircleMore size={15} className='text-white' />
            </div>
          },
        ]}
      />
      <label className='block font-medium text-xs !mb-2'>25 MAY 2024</label>
      <Steps
        direction="vertical"
        size="small"
        current={1}
        items={[
          {
            title: (<span><span className='text-blue-700'>Christian Wood</span> Send message to <span className='text-blue-700'>Nikita Houston</span> : 1 min ago </span>),
            description: (
              <div className="flex items-center gap-2">
                <div className='bg-[#dfe4e7] rounded-full p-1'>
                  <Undo size={14} className="text-gray-600" />
                </div>
                <span>This is a description.</span>
              </div>
            ),
            icon: <div className='bg-yellow-500 rounded-full p-1'>
              <MessageCircleMore size={15} className='text-white' />
            </div>
          }
        ]}
      />
    </div>
  </>
);

export default RecentActivities;
