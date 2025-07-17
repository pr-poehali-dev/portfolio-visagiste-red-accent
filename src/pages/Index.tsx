import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Свадебный макияж",
      description: "Создание безупречного образа для самого важного дня",
      price: "от 8 000 ₽",
      duration: "2-3 часа",
      features: ["Консультация", "Пробный макияж", "Выезд на дом", "Коррекция в течение дня"]
    },
    {
      title: "Макияж невесты + подружки",
      description: "Гармоничные образы для невесты и подружек",
      price: "от 12 000 ₽",
      duration: "3-4 часа",
      features: ["Макияж невесты", "Макияж 1 подружки", "Выезд на дом", "Коррекция"]
    },
    {
      title: "Репетиция свадебного макияжа",
      description: "Пробный макияж для выбора идеального образа",
      price: "от 4 000 ₽",
      duration: "1-2 часа",
      features: ["Консультация", "Подбор образа", "Фотосессия", "Рекомендации"]
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Классический свадебный образ",
      style: "Нежный и элегантный",
      image: "/img/766b8916-7ae3-40e7-8fa7-c7e485eaeabb.jpg"
    },
    {
      id: 2,
      title: "Романтичный макияж",
      style: "Мягкие оттенки",
      image: "/img/8e618d95-339c-4434-b258-a28600cfc77e.jpg"
    },
    {
      id: 3,
      title: "Профессиональный подход",
      style: "Качественная косметика",
      image: "/img/6a053bf2-580d-4f23-98dd-68c010d7e98b.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-makeup-warm-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-makeup-cream via-makeup-soft-beige to-makeup-warm-beige">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-dancing-script text-6xl md:text-8xl font-bold text-makeup-lipstick-red mb-6">
              Анна Романова
            </h1>
            <p className="font-dancing-script text-2xl md:text-3xl text-makeup-lipstick-red/80 mb-4 italic">
              Визажист
            </p>
            <p className="font-open-sans text-lg md:text-xl text-makeup-deep-red/70 mb-8 max-w-2xl mx-auto">
              Создаю безупречные образы для самых важных моментов вашей жизни. 
              Специализируюсь на свадебном макияже с 7-летним опытом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-makeup-lipstick-red hover:bg-makeup-deep-red text-white px-8 py-3 text-lg">
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Записаться на консультацию
              </Button>
              <Button variant="outline" size="lg" className="border-makeup-lipstick-red text-makeup-lipstick-red hover:bg-makeup-lipstick-red hover:text-white px-8 py-3 text-lg">
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Обсудить детали
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="h-8 w-8 text-makeup-deep-red/50" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-dancing-script text-5xl md:text-6xl font-bold text-makeup-lipstick-red mb-8">
              О себе
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
                  Привет! Меня зовут Анна, и я визажист с 7-летним опытом. 
                  Специализируюсь на свадебном макияже и создании образов для особых событий.
                </p>
                <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
                  Моя философия — подчеркнуть вашу естественную красоту и создать образ, 
                  в котором вы будете чувствовать себя уверенно и комфортно.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Badge variant="secondary" className="bg-makeup-beige text-makeup-deep-red">
                    7 лет опыта
                  </Badge>
                  <Badge variant="secondary" className="bg-makeup-soft-beige text-makeup-deep-red">
                    200+ невест
                  </Badge>
                  <Badge variant="secondary" className="bg-makeup-warm-beige text-makeup-deep-red">
                    Профессиональная косметика
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-makeup-beige/20 rounded-2xl overflow-hidden">
                  <img 
                    src="/img/766b8916-7ae3-40e7-8fa7-c7e485eaeabb.jpg" 
                    alt="Анна Романова - Визажист"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-makeup-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dancing-script text-5xl md:text-6xl font-bold text-makeup-lipstick-red mb-4">
              Портфолио
            </h2>
            <p className="font-open-sans text-lg text-gray-700 max-w-2xl mx-auto">
              Каждый образ создан с любовью и вниманием к деталям
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 animate-scale-in">
                <CardHeader className="p-0">
                  <div className="relative h-80 overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-makeup-deep-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-dancing-script text-2xl text-makeup-lipstick-red mb-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="font-open-sans text-gray-600">
                    {item.style}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dancing-script text-5xl md:text-6xl font-bold text-makeup-lipstick-red mb-4">
              Услуги и цены
            </h2>
            <p className="font-open-sans text-lg text-gray-700 max-w-2xl mx-auto">
              Профессиональный свадебный макияж с использованием качественной косметики
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <CardTitle className="font-dancing-script text-3xl text-makeup-lipstick-red">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-open-sans text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-dancing-script text-4xl font-bold text-makeup-lipstick-red">
                      {service.price}
                    </span>
                    <Badge variant="outline" className="border-makeup-lipstick-red text-makeup-lipstick-red">
                      {service.duration}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center font-open-sans text-sm text-gray-600">
                        <Icon name="Check" className="h-4 w-4 text-makeup-lipstick-red mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-makeup-lipstick-red hover:bg-makeup-deep-red text-white mt-4">
                    Выбрать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-makeup-soft-beige/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-dancing-script text-5xl md:text-6xl font-bold text-makeup-lipstick-red mb-8">
              Контакты
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 bg-makeup-coral rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-dancing-script text-xl font-semibold text-makeup-lipstick-red">Телефон</h3>
                    <p className="font-open-sans text-gray-700">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 bg-makeup-coral rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-dancing-script text-xl font-semibold text-makeup-lipstick-red">Telegram</h3>
                    <p className="font-open-sans text-gray-700">@anna_makeup</p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 bg-makeup-coral rounded-full flex items-center justify-center">
                    <Icon name="Instagram" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-dancing-script text-xl font-semibold text-makeup-lipstick-red">Instagram</h3>
                    <p className="font-open-sans text-gray-700">@anna.makeup.artist</p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 bg-makeup-coral rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-dancing-script text-xl font-semibold text-makeup-lipstick-red">Локация</h3>
                    <p className="font-open-sans text-gray-700">Москва, выезд по городу</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-dancing-script text-3xl font-bold text-makeup-lipstick-red mb-4">
                    Записаться на консультацию
                  </h3>
                  <p className="font-open-sans text-gray-700 mb-6">
                    Обсудим детали вашего образа и подберем идеальный макияж для вашего особого дня
                  </p>
                  <Button className="w-full bg-makeup-lipstick-red hover:bg-makeup-deep-red text-white">
                    <Icon name="Calendar" className="mr-2 h-5 w-5" />
                    Записаться сейчас
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-makeup-deep-red text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-dancing-script text-3xl font-bold mb-4">Анна Романова</h3>
            <p className="font-open-sans text-makeup-nude mb-6">
              Визажист • Свадебный макияж • Москва
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" className="text-white hover:text-makeup-beige">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-makeup-beige">
                <Icon name="MessageCircle" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-makeup-beige">
                <Icon name="Phone" className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-makeup-beige/20">
              <p className="font-open-sans text-sm text-makeup-nude">
                © 2024 Анна Романова. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;