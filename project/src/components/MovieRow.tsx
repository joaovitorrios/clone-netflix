import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types';
import { MovieCard } from './MovieCard';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export function MovieRow({ title, movies, onSelectMovie }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (!rowRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group/row py-4">
      <h2 className="text-2xl font-bold text-white mb-4 px-4 group-hover/row:text-[2.2rem] transition-all duration-300">
        {title}
      </h2>
      
      {showLeftArrow && (
        <div className="absolute top-0 bottom-0 left-0 hidden group-hover/row:flex items-center z-40">
          <button
            onClick={() => scroll('left')}
            className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all ml-2"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      <div
        ref={rowRef}
        onScroll={handleScroll}
        className="flex gap-2 overflow-x-hidden px-4 pb-8 scroll-smooth group-hover/row:gap-4 transition-all duration-300"
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSelect={onSelectMovie}
          />
        ))}
      </div>

      {showRightArrow && (
        <div className="absolute top-0 bottom-0 right-0 hidden group-hover/row:flex items-center z-40">
          <button
            onClick={() => scroll('right')}
            className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all mr-2"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}