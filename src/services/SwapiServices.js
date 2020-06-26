export default class SwapiServices {

    _baseUrl = 'https://swapi.dev/api';
  
    async getData(url) {
        const response = await fetch(`${this._baseUrl}${url}`);
        
        if(!response.ok) {
          throw new Error(`we have a problem with fetch ${url}`);
        }
        
        return await response.json();
    }
  
    getAllPeople = async() => {
        const response = await this.getData('/people/');
        return response.results.map(this.transformPerson);
    }
  
    async getPerson (id) {
        const person = await this.getData(`/people/${id}/`)
        return this.transformPerson(person);
    }

    getAllStarships = async() => {
        const response = await this.getData('/starships/');
        return response.results.map(this.transformShip);
    }
    async getOwnStarship(id) {
        const starships = await this.getData(`/starships/${id}/`)
        return this.transformShip(starships);
    }

    getAllPlanets = async () => {
        const response = await this.getData('/planets/');
        return response.results.map(this.transformPlanet);
    }

    async getOwnPlanet(id) {
        const planet = await this.getData(`/planets/${id}/`)
        return this.transformPlanet(planet);
    }

    getAllSpecies = async () => {
        const response = await this.getData('/species/');
        return response.results.map(this.transformSpecies);
    }

    async getOwnSpecies(id) {
        const species = await this.getData(`/species/${id}/`)
        return this.transformSpecies(species);
    }

    getAllVehicle = async () => {
        const response = await this.getData('/vehicles/');
        return response.results.map(this.transformVehicles);
    }

    async getOwnVehicle(id) {
        const vehicles = await this.getData(`/vehicles/${id}/`)
        return this.transformVehicles(vehicles);
    }

    getId(item) {
        return item.url.match(/\/([0-9]*)\/$/)[1];
    }

    transformPlanet = (planet) => {
        return {
            id: this.getId(planet),
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population,
            gravity: planet.gravity,
            rotationPeriod: planet.rotation_period,
            climate: planet.climate,
            surfaceWater: planet.surface_water,
            terrain: planet.terrain,
        }
    }

    transformPerson = (person) => {

        return {
            id: this.getId(person),
            name: person.name,
            gender: person.gender,
            mass: person.mass,
            birthDate: person.birth_year,
            hairColor: person.hair_color,
            height: person.height,
            eyeColor: person.eye_color,
            created: person.created,
        }
    }

    transformShip = (starships) => {
        
        return {
            id: this.getId(starships),
            name: starships.name,
            model: starships.model,
            passengers: starships.passengers,
            length: starships.length,
            starshipСlass: starships.starship_class,
            cargoCapacity: starships.cargo_capacity,
            crew: starships.crew,
            maxAtmospheringSpeed: starships.max_atmosphering_speed

        }
    }

    transformSpecies = (species) => {
        
        return {
            id: this.getId(species),
            name: species.name,
            classification: species.classification,
            designation: species.designation,
            averageHeight: species.average_height,
            averageLifespan: species.average_lifespan,
            language: species.language,
            skinColors: species.skin_colors,
            hairColors: species.hair_colors

        }
    }

    transformVehicles = (vehicles) => {
        
        return {
            id: this.getId(vehicles),
            name: vehicles.name,
            model: vehicles.model,
            vehicleClass: vehicles.vehicle_class,
            manufacturer: vehicles.manufacturer,
            cargoCapacity: vehicles.cargo_capacity,
            consumables: vehicles.consumables,
            crew: vehicles.crew,
            maxAtmospheringSpeed: vehicles.max_atmosphering_speed

        }
    }
  }
  
  