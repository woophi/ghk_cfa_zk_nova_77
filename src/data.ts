import buildings from './assets/buildings.png';
import calendar from './assets/calendar.png';
import check from './assets/check.png';
import sun from './assets/sun.png';
import suns from './assets/suns.png';

export const data = {
  minRequest: 1_556,
  maxRequest: 25_000,
  titleName: 'ЖК NOVA (Объект №77:05:0001008:5)',
  titleType: 'Цифровые квартиры',
  titlePeriod: '2-3 года',
  p1: 'Цифровые квартиры — это инвестиции в конкретный объект или портфель объектов первичной жилой недвижимости.',
  p2: 'Покупая Цифровые квартиры , вы получаете цифровые права на объекты выкупленные у застройщика по договорам долевого участия (ДДУ) и финансовые результаты от переуступки ДДУ конечным собственникам объектов. У вас не возникает прав собственности на объекты, обременений по владению и содержанию объектов – все сделает девелоперский холдинг. А вы получите доход, который сформируется за счёт роста стоимости объекта в процессе строительства и получения разрешения на ввод объекта в эксплуатацию.',
  p3: 'Цифровые квартиры – это инновационный продукт, выпускаемый в формате ЦФА.',
  cfaNumber: 'SMLT-1-DTD-092024-00073',
  cfaPrice: '7000 ₽',
  cfaPriceNumber: 7000,
  cfaVolume: 'от 35 000 000 ₽ до 175 000 000 ₽',
  cfaVolumeM2: 'от 50 м2 до 250 м2',
  cfaPeriodPayment: 'В конце срока',
  cfaDuration: '3 года',
  hideSellDate: false,

  imgRows: [
    {
      title: 'Элитная недвижимость',
      subtitle: 'Флагманский проект крупного девелопера',
      img: sun,
    },
    {
      title: 'Ожидаемая доходность',
      subtitle: '20 - 22% годовых',
      img: suns,
    },
    {
      title: 'Комфортный срок',
      subtitle: 'Срок инвестиций 2-3 года',
      img: calendar,
    },
    {
      title: 'Амортизация',
      subtitle: 'При переуступке ДДУ на объекты',
      img: buildings,
    },
    {
      title: 'Качественный кредитный риск',
      subtitle: 'Рейтинг эмитента по версии АКРА A-(RU)',
      img: check,
    },
  ],
  emitment: 'ПАО «ГК «САМОЛЕТ»',
  address: 'ул Липовой Рощи, д. 1, к. 3, помещ. 18, ком. 3, г Красногорск, Московская Область, 143082',
  site: 'https://samolet.ru/',
};
