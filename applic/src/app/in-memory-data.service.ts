import { InMemoryDbService } from 'in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const media = [
			{id:0, url: 'https://unsplash.it/300/400/?imag=1084', description: 'seals' },
			{id:1, url: 'https://unsplash.it/300/400/?imag=1080', description: 'strawberry' },
			{id:2, url: 'https://unsplash.it/300/400/?imag=1072', description: 'car' },
			{id:3, url: 'https://unsplash.it/300/400/?imag=1069', description: 'jellyfish' },
			{id:4, url: 'https://unsplash.it/300/400/?imag=1067', description: 'city' },
			{id:5, url: 'https://unsplash.it/300/400/?imag=1066', description: 'baby' },
			{id:6, url: 'https://unsplash.it/300/400/?imag=1061', description: 'coast' },
			{id:7, url: 'https://unsplash.it/300/400/?imag=1052', description: 'rock' },
			{id:8, url: 'https://unsplash.it/300/400/?imag=1040', description: 'castle' },
			{id:9, url: 'https://unsplash.it/300/400/?imag=1039', description: 'waterfall' },
			{id:10, url: 'https://unsplash.it/300/400/?imag=977', description: 'amanita' },
			{id:11, url: 'https://unsplash.it/300/400/?imag=971', description: 'winter' },
			{id:12, url: 'https://unsplash.it/300/400/?imag=943', description: 'deer' },
			{id:13, url: 'https://unsplash.it/300/400/?imag=905', description: 'mountains' },
			{id:14, url: 'https://unsplash.it/300/400/?imag=901', description: 'north-light' },
		];
		return{media};
	}
 } 
  