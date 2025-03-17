import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Rooms from '../views/Rooms.vue';
import FloorOne from '@/views/FloorOne.vue';
import FloorTwo from '@/views/FloorTwo.vue';
import FloorThree from '@/views/FloorThree.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { 
    path: '/rooms', 
    component: Rooms,
    children: [
      {
        path: 'floor1',
        component: FloorOne
      },
      {
        path: 'floor2',
        component: FloorTwo
      },
      {
        path: 'floor3',
        component: FloorThree
      },
    ]
   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;