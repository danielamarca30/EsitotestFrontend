import { h } from 'preact';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false 
}: OptimizedImageProps) {
  // Generar srcset para diferentes tamaños
  const sizes = [width/2, width, width*2];
  const srcSet = sizes
    .map(size => `${getSizedImage(src, size)} ${size}w`)
    .join(', ');

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchpriority={priority ? "high" : "auto"}
      srcSet={srcSet}
      sizes={`(max-width: ${width}px) 100vw, ${width}px`}
    />
  );
}

function getSizedImage(src: string, width: number): string {
  // Aquí podrías implementar la lógica para obtener versiones optimizadas de las imágenes
  // Por ahora retornamos la misma imagen
  return src;
}
