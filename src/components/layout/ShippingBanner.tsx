import { h } from 'preact';
import { Truck } from 'lucide-preact';

export default function ShippingBanner() {
  return (
    <div className="bg-orange-50 text-gray-700 py-3 text-center">
      <p className="flex items-center justify-center">
        <Truck className="h-5 w-5 mr-2 text-orange-400" />
        Envío gratis en pedidos superiores a 50€
      </p>
    </div>
  );
}