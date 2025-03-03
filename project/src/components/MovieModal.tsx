import React, { useEffect } from 'react';
import { X, Play, Plus, ThumbsUp, Volume2, VolumeX } from 'lucide-react';
import { Movie } from '../types';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export function MovieModal({ movie, onClose }: MovieModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-zinc-900 rounded-lg max-w-4xl w-full relative animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:opacity-80 transition-opacity"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="relative h-[400px] group/player">
          <img
            src={movie.imageUrl}
            alt={movie.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{movie.title}</h2>
              <div className="flex gap-3 mb-4">
                <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded hover:bg-opacity-80 transition-colors">
                  <Play className="w-6 h-6" />
                  Play
                </button>
                <button className="flex items-center gap-2 bg-gray-500/50 text-white px-6 py-3 rounded hover:bg-opacity-80 transition-colors">
                  <Plus className="w-6 h-6" />
                  My List
                </button>
                <button className="flex items-center gap-2 bg-gray-500/50 text-white px-6 py-3 rounded hover:bg-opacity-80 transition-colors">
                  <ThumbsUp className="w-6 h-6" />
                  Rate
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover/player:opacity-100 transition-opacity">
            <button className="bg-gray-500/50 p-2 rounded-full hover:bg-opacity-80 transition-colors">
              <Volume2 className="w-6 h-6 text-white" />
            </button>
            <button className="bg-gray-500/50 p-2 rounded-full hover:bg-opacity-80 transition-colors">
              <VolumeX className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 text-white mb-6">
            <span className="text-green-500 text-xl font-semibold">{movie.rating}% Match</span>
            <span className="text-lg">{movie.year}</span>
          </div>
          <p className="text-white text-lg leading-relaxed">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}