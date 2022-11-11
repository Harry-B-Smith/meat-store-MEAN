import {Meat} from './app/shared/models/meat';

export const sample_meat: Meat[] = [
  {
    id:'1',
    name: 'Bison Liver',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/meat-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'2',
    name: 'Beef Liver',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/meat-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id:'3',
    name: 'Beef Kidney',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/meat-3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id:'4',
    name: 'Beef Heart',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/meat-4.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id:'5',
    name: 'Beef Tongue',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/meat-5.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id:'6',
    name: 'Bison Andrenal Glands',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/meat-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
]
