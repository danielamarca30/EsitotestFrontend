import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { ChevronLeft, ChevronRight } from 'lucide-preact';
import { api } from '../../services/api';
import OptimizedImage from '../OptimizedImage';

export default function HeroBanner() {
  const [banners, setBanners] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await api.getBanners();
        setBanners(data);
        setLoading(false);

        // Precargar la siguiente imagen
        if (data.length > 1) {
          const nextImage = new Image();
          nextImage.src = data[1].image;
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const nextBanner = () => {
    const nextIndex = (currentBanner + 1) % banners.length;
    setCurrentBanner(nextIndex);
    
    // Precargar la siguiente imagen
    const nextNextIndex = (nextIndex + 1) % banners.length;
    const nextImage = new Image();
    nextImage.src = banners[nextNextIndex].image;
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  if (loading || banners.length === 0) {
    return (
      <div className="relative h-[400px] bg-gray-100 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  const banner = banners[currentBanner];

  return (
    <div className="relative h-[400px] overflow-hidden bg-gray-100">
      <OptimizedImage
        src={banner.image}
        alt={banner.title}
        width={1920}
        height={400}
        className="w-full h-full object-cover"
        priority={true}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-4">{banner.title}</h1>
            <p className="text-lg mb-6">{banner.description}</p>
            <a
              href={banner.link}
              className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition-colors inline-block"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Banner anterior"
      >
        <ChevronLeft className="h-6 w-6 text-white" aria-hidden="true" />
      </button>
      
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Banner siguiente"
      >
        <ChevronRight className="h-6 w-6 text-white" aria-hidden="true" />
      </button>
    </div>
  );
}