import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const historyData = [
    {
      year: "1884-1890",
      title: "Строительство",
      text: "Проект архитектора А.Г. Бернардацци. Крестообразная планировка стала символом тюрьмы."
    },
    {
      year: "1890-1917",
      title: "Царская тюрьма",
      text: "Содержались политзаключённые, революционеры. Через Кресты прошли тысячи борцов за свободу."
    },
    {
      year: "1918-1941",
      title: "Советский период",
      text: "Массовые репрессии 1930-х. Тюрьма стала символом политических преследований."
    },
    {
      year: "1941-1945",
      title: "Блокада Ленинграда",
      text: "Продолжала работать даже в осаждённом городе. Заключённые голодали наравне с жителями."
    },
    {
      year: "1945-1990",
      title: "Послевоенное время",
      text: "Одна из крупнейших тюрем СССР. Перенаселение и тяжёлые условия содержания."
    },
    {
      year: "1990-2017",
      title: "Современная Россия",
      text: "Кресты-1 стали самой известной следственной тюрьмой страны. Символ российской пенитенциарной системы."
    },
    {
      year: "2017",
      title: "Закрытие",
      text: "Переезд в новый комплекс Кресты-2. Здание объявлено памятником истории."
    }
  ];

  const architectureOld = [
    { icon: "Building2", title: "Крестообразная планировка", desc: "Пять корпусов, образующих два креста" },
    { icon: "Users", title: "Вместимость", desc: "Рассчитана на 1150 человек, содержалось до 10 000" },
    { icon: "Brick", title: "Красный кирпич", desc: "Монументальная архитектура XIX века" },
    { icon: "Lock", title: "Камеры", desc: "Переполненные камеры, минимум света и воздуха" }
  ];

  const architectureNew = [
    { icon: "Sun", title: "Естественное освещение", desc: "Большие окна, доступ дневного света в каждой камере" },
    { icon: "Heart", title: "Реабилитация", desc: "Мастерские, спортзалы, образовательные центры" },
    { icon: "Trees", title: "Зелёные зоны", desc: "Прогулочные дворы с деревьями и травой" },
    { icon: "Shield", title: "Безопасность", desc: "Современные технологии без насилия и унижения" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-secondary text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="Building" size={40} className="text-primary" />
            <h1 className="text-5xl font-bold">Кресты</h1>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl">
            История легендарной тюрьмы Санкт-Петербурга. От символа царской России до образца современной пенитенциарной архитектуры.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-secondary">Историческое здание</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/1445c7ff-0dd1-44d4-92c8-befddf6eac6e/files/1475b2ae-9552-47a9-b0f9-35ad8ea8931a.jpg" 
                alt="Кресты - архивное фото"
                className="w-full h-80 object-cover"
              />
            </Card>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">«Кресты» — следственный изолятор №1</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Построена в 1884-1890 годах по проекту архитектора А.Г. Бернардацци. Получила название за крестообразную форму двух корпусов.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Через тюрьму прошли революционеры, политзаключённые, учёные, писатели. Стала символом российской истории XX века.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {architectureOld.map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <Icon name={item.icon} size={32} className="text-primary mb-3" />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-secondary">Хронология</h2>
          <div className="space-y-6">
            {historyData.map((period, idx) => (
              <Card key={idx} className="p-6 hover:shadow-md transition-shadow border-l-4 border-primary">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-40 flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">{period.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{period.title}</h3>
                    <p className="text-muted-foreground">{period.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-secondary">Тюрьма будущего</h2>
          
          <Tabs defaultValue="concept" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="concept">Концепция</TabsTrigger>
              <TabsTrigger value="comparison">Сравнение</TabsTrigger>
            </TabsList>
            
            <TabsContent value="concept" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/1445c7ff-0dd1-44d4-92c8-befddf6eac6e/files/7dab7fd2-9579-47c5-b1ed-47cca2dab89b.jpg" 
                    alt="Современная тюрьма"
                    className="w-full h-80 object-cover"
                  />
                </Card>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Гуманная архитектура</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Современная пенитенциарная архитектура фокусируется на реабилитации, а не наказании. Скандинавский опыт показывает эффективность подхода.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Естественный свет, зелёные зоны, мастерские и образование снижают рецидив с 60% до 20%.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mt-12">
                {architectureNew.map((item, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow bg-primary/5">
                    <Icon name={item.icon} size={32} className="text-primary mb-3" />
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="mt-8">
              <Card className="overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/1445c7ff-0dd1-44d4-92c8-befddf6eac6e/files/d24cc06f-ea8b-4d53-ad99-d5ca2dc70e6b.jpg" 
                  alt="Сравнение камер"
                  className="w-full h-96 object-cover"
                />
              </Card>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <Card className="p-8 bg-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-secondary">XIX век</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="X" size={20} className="text-red-600 flex-shrink-0 mt-1" />
                      <span>Перенаселение: 10 человек на 3 м²</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" size={20} className="text-red-600 flex-shrink-0 mt-1" />
                      <span>Минимум света и воздуха</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" size={20} className="text-red-600 flex-shrink-0 mt-1" />
                      <span>Отсутствие реабилитации</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="X" size={20} className="text-red-600 flex-shrink-0 mt-1" />
                      <span>Рецидив 60-80%</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 bg-primary/5">
                  <h3 className="text-2xl font-bold mb-6 text-primary">XXI век</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Одиночные камеры с удобствами</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Естественное освещение 8+ часов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Образование, работа, спорт</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Рецидив 20-30%</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bg-secondary text-white rounded-2xl p-12 text-center">
          <Icon name="TrendingUp" size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">От наказания к реабилитации</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Современная пенитенциарная система переходит от карательной модели к гуманной. 
            Опыт Норвегии и Дании доказывает: достойные условия и реабилитация эффективнее жестокости.
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>Документальный проект об истории тюрьмы «Кресты» и будущем пенитенциарной системы</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
