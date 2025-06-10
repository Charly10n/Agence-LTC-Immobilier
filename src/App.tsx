import React, { useState } from 'react';
import { 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  Home, 
  Key, 
  TrendingUp, 
  Users, 
  Star,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    type: 'achat',
    propertyType: 'appartement',
    location: '',
    priceMin: '',
    priceMax: ''
  });

  const featuredProperties = [
    {
      id: 1,
      title: "Appartement T3 - Centre Ville",
      price: "285,000",
      location: "Paris 15ème",
      surface: "75",
      rooms: "3",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Maison Familiale avec Jardin",
      price: "450,000",
      location: "Boulogne-Billancourt",
      surface: "120",
      rooms: "5",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Studio Moderne - Quartier Latin",
      price: "195,000",
      location: "Paris 5ème",
      surface: "35",
      rooms: "1",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Duplex avec Terrasse",
      price: "520,000",
      location: "Neuilly-sur-Seine",
      surface: "95",
      rooms: "4",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    }
  ];

  const services = [
    {
      icon: Home,
      title: "Vente Immobilière",
      description: "Accompagnement complet pour la vente de votre bien immobilier avec estimation gratuite et marketing personnalisé."
    },
    {
      icon: Key,
      title: "Location & Gestion",
      description: "Service de location et gestion locative avec suivi administratif complet et accompagnement des propriétaires."
    },
    {
      icon: TrendingUp,
      title: "Conseil en Investissement",
      description: "Expertise et conseils personnalisés pour vos projets d'investissement immobilier rentable."
    },
    {
      icon: Users,
      title: "Accompagnement Acheteurs",
      description: "Support complet pour votre projet d'achat, de la recherche au financement jusqu'à la signature."
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recherche:', searchFilters);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar */}
          <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-600 border-b border-gray-100">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>01 42 36 85 90</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@ltc-immobilier.fr</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook className="h-4 w-4 hover:text-blue-600 cursor-pointer transition-colors" />
              <Instagram className="h-4 w-4 hover:text-pink-600 cursor-pointer transition-colors" />
              <Linkedin className="h-4 w-4 hover:text-blue-700 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Main navigation */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-700">
                <span className="text-blue-700">LTC</span>
                <span className="text-gray-700 ml-2">Immobilier</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Accueil</a>
              <a href="#biens" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Nos Biens</a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">À Propos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Contact</a>
              <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium">
                Estimer mon bien
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <a href="#accueil" className="text-gray-700 hover:text-blue-700 font-medium">Accueil</a>
                <a href="#biens" className="text-gray-700 hover:text-blue-700 font-medium">Nos Biens</a>
                <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium">À Propos</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium">Contact</a>
                <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium w-fit">
                  Estimer mon bien
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Votre Projet Immobilier
              <br />
              <span className="text-teal-300">Notre Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Depuis plus de 15 ans, LTC Immobilier vous accompagne dans tous vos projets immobiliers 
              avec professionnalisme et proximité.
            </p>

            {/* Search Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-5xl mx-auto">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchFilters.type}
                      onChange={(e) => setSearchFilters({...searchFilters, type: e.target.value})}
                    >
                      <option value="achat">Achat</option>
                      <option value="location">Location</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Bien</label>
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchFilters.propertyType}
                      onChange={(e) => setSearchFilters({...searchFilters, propertyType: e.target.value})}
                    >
                      <option value="appartement">Appartement</option>
                      <option value="maison">Maison</option>
                      <option value="studio">Studio</option>
                      <option value="local-commercial">Local commercial</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Ville</label>
                    <input 
                      type="text" 
                      placeholder="Paris, Lyon, Marseille..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchFilters.location}
                      onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Budget</label>
                    <div className="flex space-x-2">
                      <input 
                        type="text" 
                        placeholder="Min"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={searchFilters.priceMin}
                        onChange={(e) => setSearchFilters({...searchFilters, priceMin: e.target.value})}
                      />
                      <input 
                        type="text" 
                        placeholder="Max"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={searchFilters.priceMax}
                        onChange={(e) => setSearchFilters({...searchFilters, priceMax: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button 
                      type="submit"
                      className="w-full bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700 transition-colors font-medium flex items-center justify-center space-x-2"
                    >
                      <Search className="h-5 w-5" />
                      <span>Rechercher</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="biens" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Biens en Vedette
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre sélection de biens immobiliers de qualité, 
              rigoureusement choisis pour leur emplacement et leur potentiel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.price}€
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{property.surface}m²</span>
                    <span>{property.rooms} pièces</span>
                  </div>
                  <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium">
                    Voir le bien
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center mx-auto space-x-2">
              <span>Voir tous nos biens</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services immobiliers pour vous accompagner 
              à chaque étape de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group hover:bg-gray-50 p-6 rounded-2xl transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                LTC Immobilier, Votre Partenaire de Confiance
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Forte de plus de 15 années d'expérience dans l'immobilier parisien et francilien, 
                notre agence LTC Immobilier s'est bâtie une réputation solide grâce à son 
                professionnalisme et sa proximité avec ses clients.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre équipe d'experts vous accompagne dans tous vos projets : achat, vente, 
                location, gestion locative et conseil en investissement. Nous mettons notre 
                connaissance approfondie du marché au service de vos ambitions.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">500+</div>
                  <div className="text-gray-600">Biens vendus</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">15+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">98%</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-gray-600 ml-2">4.9/5 - 127 avis clients</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Équipe LTC Immobilier"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold text-gray-900">Notre Promesse</div>
                <div className="text-gray-600">Transparence & Proximité</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contactez-Nous
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans votre projet immobilier.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-8 rounded-2xl text-center">
              <Phone className="h-12 w-12 text-teal-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
              <p className="text-blue-200 mb-4">Appelez-nous du lundi au samedi</p>
              <p className="text-2xl font-bold">01 42 36 85 90</p>
            </div>

            <div className="bg-blue-800 p-8 rounded-2xl text-center">
              <Mail className="h-12 w-12 text-teal-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-200 mb-4">Écrivez-nous à tout moment</p>
              <p className="text-lg font-semibold">contact@ltc-immobilier.fr</p>
            </div>

            <div className="bg-blue-800 p-8 rounded-2xl text-center">
              <MapPin className="h-12 w-12 text-teal-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bureau</h3>
              <p className="text-blue-200 mb-4">Rendez-vous sur rendez-vous</p>
              <p className="text-lg">123 Avenue des Champs-Élysées<br />75008 Paris</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium text-lg">
              Prendre Rendez-vous
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-blue-400">LTC</span>
                <span className="text-white ml-2">Immobilier</span>
              </div>
              <p className="text-gray-400 mb-4">
                Votre partenaire immobilier de confiance depuis plus de 15 ans.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Vente</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Achat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Location</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gestion locative</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investissement</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Secteurs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Paris</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Neuilly-sur-Seine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Boulogne-Billancourt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Levallois-Perret</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Issy-les-Moulineaux</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>01 42 36 85 90</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@ltc-immobilier.fr</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>123 Avenue des Champs-Élysées<br />75008 Paris</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LTC Immobilier. Tous droits réservés. | Mentions légales | Politique de confidentialité</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;