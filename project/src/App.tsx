import React, { useState } from 'react';
import { Play, Info } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { MovieRow } from './components/MovieRow';
import { MovieModal } from './components/MovieModal';
import { Movie } from './types';

// Sample data - in a real app, this would come from an API
const movies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&h=400&fit=crop",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    year: 2022,
    rating: "96"
  },
  {
    id: 2,
    title: "The Crown",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=400&fit=crop",
    description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    year: 2023,
    rating: "92"
  },
  {
    id: 3,
    title: "Black Mirror",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=400&fit=crop",
    description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    year: 2023,
    rating: "94"
  },
  {
    id: 4,
    title: "The Witcher",
    imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&h=400&fit=crop",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    year: 2023,
    rating: "91"
  },
  {
    id: 5,
    title: "Wednesday",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=400&fit=crop",
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    year: 2022,
    rating: "88"
  }
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div className="relative min-h-screen bg-zinc-900">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&h=1080&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        </div>

        <div className="absolute bottom-[20%] left-16 max-w-xl">
          <h1 className="text-6xl font-bold text-white mb-4">Stranger Things</h1>
          <p className="text-lg text-white mb-6">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces and one strange little girl.
          </p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white px-8 py-3 rounded hover:bg-opacity-80">
              <Play className="w-5 h-5" />
              Play
            </button>
            <button className="flex items-center gap-2 bg-gray-500 bg-opacity-50 text-white px-8 py-3 rounded hover:bg-opacity-80">
              <Info className="w-5 h-5" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Movie Rows */}
      <div className="relative z-20 -mt-32 space-y-8 pb-16">
        <MovieRow
          title="Trending Now"
          movies={movies}
          onSelectMovie={setSelectedMovie}
        />
        <MovieRow
          title="Popular on Netflix"
          movies={movies.slice().reverse()}
          onSelectMovie={setSelectedMovie}
        />
        <MovieRow
          title="New Releases"
          movies={movies}
          onSelectMovie={setSelectedMovie}
        />
      </div>

      {/* Movie Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;