import './bootstrap';
import 'flowbite';
import { Tabs } from 'flowbite';

import { initFlowbite } from 'flowbite';
window.initFlowbite = initFlowbite; // return apex chart

import ApexCharts from 'apexcharts';
window.ApexCharts = ApexCharts; // return apex chart

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
