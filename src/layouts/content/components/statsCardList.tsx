import React, { useRef } from 'react';

import StatsCard from './slider-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cardData } from '@constants/dummy';

const StatsCardList: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };



  return (
    <div className="relative w-full pb-6">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-[40%] -translate-y-1/2 z-10 bg-white p-1 shadow-md rounded-full"
      >
        <ChevronLeft size={20} className='text-black' />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-[40%] -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
      >
        <ChevronRight size={20} className='text-black' />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 px-10 scroll-smooth hide-scrollbar no-scrollbar"
      >
        {cardData.map((card) => (
          <div key={card.key} className="flex-shrink-0">
            <StatsCard
              label={card.label}
              number={card.number}
              duration={card.duration}
              Icon={card.Icon}
              statsCount={card.statsCount}
              statsStatus={card.statsStatus as "lose" | "profit"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCardList;
