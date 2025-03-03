import React from 'react';
import { Play, Info, Plus, ThumbsUp } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

export function MovieCard({ movie, onSelect }: MovieCardProps) {
  return (
    <div 
      className="relative flex-none w-[250px] h-[140px] group cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10"
      onClick={() => onSelect(movie)}
    >
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 rounded-md">
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-bold mb-2">{movie.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-500 text-sm">{movie.rating}% Match</span>
            <span className="text-white text-sm">{movie.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-white rounded-full p-1.5 hover:bg-opacity-80 transition-colors">
              <Play className="w-4 h-4 text-black" />
            </button>
            <button className="bg-gray-500 bg-opacity-50 rounded-full p-1.5 hover:bg-opacity-80 transition-colors">
              <Plus className="w-4 h-4 text-white" />
            </button>
            <button className="bg-gray-500 bg-opacity-50 rounded-full p-1.5 hover:bg-opacity-80 transition-colors">
              <ThumbsUp className="w-4 h-4 text-white" />
            </button>
            <button className="bg-gray-500 bg-opacity-50 rounded-full p-1.5 hover:bg-opacity-80 transition-colors">
              <Info className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}