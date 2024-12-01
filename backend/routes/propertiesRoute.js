import express from 'express';
import { Property } from '../models/propertyModel.js';

const router = express.Router();




// Route for save a new Property
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.Category ||
            !request.body.City ||
            !request.body.State
        ){
            return response.status(400).send({
                message: 'Send all required fields: Category, City, State',
            });
        }
        const newProperty = {
            Category: request.body.Category,
            City: request.body.City,
            State: request.body.State,
            Price: request.body.Price,
            Chambres: request.body.Chambres,
            "Salle de bain": request.body["Salle de bain"],
            "Surf. Habitable": request.body["Surf. Habitable"],
            "Surf Terrain": request.body["Surf Terrain"],
            "Annee Construction": request.body["Annee Construction"],
            "Vue mer": request.body["Vue mer"],
            Piscine: request.body.Piscine,
            Garage: request.body.Garage,
            Jardin: request.body.Jardin,
            "Place de parc": request.body["Place de parc"],
            Ascenseur: request.body.Ascenseur
        };

    const property = await Property.create(newProperty);

    return response.status(201).send(property);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

// Route to Get All Properties from Database
router.get('/', async (request, response) => {
    try {
        const properties = await Property.find({});

        return response.status(200).json({
            count: properties.length,
            data: properties
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})


// Route to Get One Property from Database by id
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const property = await Property.findById(id);

        return response.status(200).json(property);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to Update a Property
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.Category ||
            !request.body.City ||
            !request.body.State
        ) { 
            return response.status(400).send({
                message: 'Send all required fields: Category, City, State',
            });
        }

        const { id } = request.params;

        const result = await Property.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Property not fount'});
        }
        return response.status(200).send({ message: 'Property updated successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message });
    }
});

// Route for Deleting a Property
router.delete('/:id', async (request, response) => {
    try{
        const { id } = request.params;

        const result = await Property.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Property not found'});
        }

        return response.status(200).send({ message: 'Property deleted successfully'});

    } catch (error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;