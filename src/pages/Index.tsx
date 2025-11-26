import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const historyData = [
    {
      year: "1730-е",
      title: "Винный городок",
      text: "На месте будущих Крестов располагался казённый винный городок. Два здания П-образной формы с внутренним двором."
    },
    {
      year: "1867",
      title: "Срочная тюрьма",
      text: "Винный городок перестроили в изолятор для краткосрочного содержания. Старой тюрьмы в Новой Голландии уже не хватало."
    },
    {
      year: "1884-1892",
      title: "Строительство легендарных Крестов",
      text: "Архитектор Антоний Томишко создал два пятиэтажных корпуса крестообразной формы. 960 камер на 1150 человек. 1,2 млн кирпичей в строительстве."
    },
    {
      year: "1893",
      title: "Открытие одиночной тюрьмы",
      text: "Самая современная тюрьма Европы. Электричество, водоснабжение, отопление. Церковь Александра Невского на верхнем этаже. Заключённые обязаны работать."
    },
    {
      year: "1908",
      title: "Политические узники царской России",
      text: "Депутаты Первой Госдумы за Выборгское воззвание. В. Набоков-старший привозил книги — они стали основой тюремной библиотеки."
    },
    {
      year: "1918",
      title: "Революция и закрытие храма",
      text: "Тюремный храм закрыли, кресты с куполов сняли, помещение превратили в клуб. Начались гонения на священников."
    },
    {
      year: "1922",
      title: "Единственный успешный побег",
      text: "Благодаря надзирателю 4-й галереи Ивану Кондратьеву сбежали четыре бандита во главе с Ленькой Пантелеевым. Единственный побег за всю историю."
    },
    {
      year: "1930-е",
      title: "Большой террор",
      text: "Массовые репрессии. В одиночках по 7 м² содержали 15-17 человек. Узники: Лев Гумилёв, Константин Рокоссовский, Георгий Жжёнов, Николай Заболоцкий, Теодор Шумовский."
    },
    {
      year: "1941-1945",
      title: "Блокада Ленинграда",
      text: "Тюрьма продолжала работать в осаждённом городе. Заключённые голодали наравне с жителями. При Крестах работала «шарашка» — конструкторское бюро ОКБ-172."
    },
    {
      year: "1943-1945",
      title: "Тюремное ОКБ-172",
      text: "Талантливые заключённые-конструкторы создали оружие Победы: противотанковую пушку М-42, корабельную установку Б-2-ЛМ, САУ СУ-152."
    },
    {
      year: "1964",
      title: "СИЗО №1",
      text: "Официально становится следственным изолятором № 1. Содержатся подследственные до вынесения приговора."
    },
    {
      year: "1990-е",
      title: "Символ тюремной культуры",
      text: "Авторитеты криминального мира считали отсидку в Крестах престижем. Набивали татуировки — перстень с крестом и короной."
    },
    {
      year: "2004",
      title: "Восстановление храма",
      text: "На купола вернули кресты. Восстановлены престол, иконостас и регулярные богослужения."
    },
    {
      year: "2006",
      title: "Решение о переносе",
      text: "Принято решение о строительстве новых Крестов за пределами города. Историческое здание планируют сохранить как памятник."
    },
    {
      year: "2007-2017",
      title: "Строительство Крестов-2",
      text: "В Колпино строят новый СИЗО на 4000 человек. Площадь 35 га. Сохранили крестообразную форму для солнечного света во всех камерах."
    },
    {
      year: "1 декабря 2017",
      title: "Переезд в Кресты-2",
      text: "Заключённых перевели в современный комплекс под Колпино. Самый большой изолятор в мире. Старые Кресты опустели."
    },
    {
      year: "2025",
      title: "Новая жизнь",
      text: "ГК «КВС» купила комплекс за 1,136 млрд руб. Планы: музей истории тюрьмы, гостиница, рестораны, галереи. Инвестиции в реконструкцию — 10 млрд руб."
    }
  ];

  const architectureOld = [
    { icon: "Cross", title: "Крестообразная форма", desc: "Два пятиэтажных корпуса в виде креста. Солнце обязательно посещает все камеры." },
    { icon: "Users", title: "960 камер", desc: "Рассчитаны на 1150 человек, содержалось до 10 000 в период репрессий" },
    { icon: "Church", title: "Церковь Александра Невского", desc: "Пятиглавая церковь на верхнем этаже одного из корпусов" },
    { icon: "Zap", title: "Передовые технологии", desc: "Электричество, водоснабжение, отопление — самая современная тюрьма Европы 1893 года" },
    { icon: "Book", title: "Тюремная библиотека", desc: "Основана депутатами Госдумы. Самая популярная книга — 'Преступление и наказание'" },
    { icon: "Lock", title: "1,2 млн кирпичей", desc: "Строили 700 заключённых. В раствор клали яйца для прочности, как в храмах" }
  ];

  const famousPrisoners = [
    { icon: "User", name: "Лев Гумилёв", desc: "Историк, сын Анны Ахматовой. Она написала о 'Крестах' поэму 'Реквием'" },
    { icon: "Medal", name: "Константин Рокоссовский", desc: "Будущий маршал СССР, герой Великой Отечественной войны" },
    { icon: "Film", name: "Георгий Жжёнов", desc: "Актёр театра и кино, народный артист СССР" },
    { icon: "Feather", name: "Николай Заболоцкий", desc: "Поэт, переводчик. Репрессирован в 1938 году" },
    { icon: "Globe", name: "Теодор Шумовский", desc: "Востоковед, арабист, переводчик" },
    { icon: "Wrench", name: "Виктор Бродский", desc: "Кораблестроитель, работал в тюремном ОКБ-172" }
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
                src="https://cdn.poehali.dev/projects/1445c7ff-0dd1-44d4-92c8-befddf6eac6e/files/060278ee-5bb8-439c-babd-7b0edcb4bf1b.jpg" 
                alt="Кресты - вид с высоты"
                className="w-full h-80 object-cover"
              />
            </Card>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">«Кресты» — самая знаменитая тюрьма России</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Построена в 1884-1892 годах архитектором Антонием Томишко. Два пятиэтажных корпуса крестообразной формы — 960 камер, рассчитанных на 1150 человек. При строительстве в раствор клали куриные яйца для прочности, как в храмах.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                В 1893 году стала самой современной тюрьмой Европы с электричеством, водопроводом и отоплением. Через Кресты прошли тысячи судеб: революционеры, депутаты Госдумы, маршалы, поэты, учёные, бандиты.
              </p>
              <p className="text-lg font-semibold text-primary">
                «Миллион двести кирпичей, семьсот заключённых-строителей и одна ненайденная камера»
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {architectureOld.map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <Icon name={item.icon} size={32} className="text-primary mb-3" />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary/5 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Легенда об архитекторе</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              По легенде, первым арестантом стал сам Антоний Томишко. Якобы он заявил Александру III, что тюрьма построена для него. Возмущённый император арестовал архитектора и поместил в камеру № 1000. Впрочем, официальных подтверждений этой истории нет.
            </p>
          </Card>
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
          <h2 className="text-4xl font-bold mb-8 text-secondary">Знаменитые узники</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Через Кресты прошли тысячи людей, чьи судьбы стали частью истории России. Среди них — маршалы, поэты, учёные, актёры.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {famousPrisoners.map((person, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <Icon name={person.icon} size={32} className="text-primary mb-3" />
                <h4 className="font-semibold text-lg mb-2">{person.name}</h4>
                <p className="text-sm text-muted-foreground">{person.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-secondary">Кресты-2: Новая эра</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/1445c7ff-0dd1-44d4-92c8-befddf6eac6e/files/7dab7fd2-9579-47c5-b1ed-47cca2dab89b.jpg" 
                alt="Кресты-2"
                className="w-full h-80 object-cover"
              />
            </Card>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Самый большой изолятор в мире</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                В 2017 году заключённых перевели в новый комплекс в Колпино. Площадь 35 га, вместимость 4000 человек. Сохранили крестообразную форму для солнечного света.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Старые Кресты куплены за 1,136 млрд руб. Планируется создать музей истории, гостиницу и общественные пространства.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary text-white rounded-2xl p-12 text-center">
          <Icon name="Building" size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">130 лет истории</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-4">
            С 1893 по 2017 год Кресты были свидетелями всех эпох российской истории. От царской одиночной тюрьмы до символа советских репрессий и современного СИЗО.
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Сегодня историческое здание ждёт новая жизнь как культурное пространство и музей памяти.
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