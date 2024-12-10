import { h } from 'preact';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-preact';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">ESITO</h3>
            <p className="text-gray-300">Tu tienda de confianza para componentes electrónicos y herramientas.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-400" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-400" />
                <span>info@esito.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-orange-400" />
                <span>Calle Principal, 123</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Envíos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ESITO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}