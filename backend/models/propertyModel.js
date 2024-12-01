import mongoose from "mongoose";

const propertySchema = mongoose.Schema(
    {
        Category: {
            type: Number,
            required: true
        },
        City: {
            type: Number,
            required: true
        },
        State: {
            type: Number,
            required: true
        },
        Price: {
            type: Number,
            required: true
        },
        Chambres: {
            type: Number,
            required: true
        },
        "Salle de bain": {
            type: Number,
            required: true
        },
        "Surf. Habitable": {
            type: Number,
            required: true
        },
        "Surf Terrain": {
            type: Number,
            required: true
        },
        "Annee Construction": {
            type: Number,
            required: true
        },
        "Vue mer": {
            type: Number,
            required: true
        },
        Piscine: {
            type: Number,
            required: true
        },
        Garage: {
            type: Number,
            required: true
        },
        Jardin: {
            type: Number,
            required: true
        },
        "Place de parc": {
            type: Number,
            required: true
        },
        Ascenseur: {
            type: Number,
            required: true
        },
    },
    {
        timestamps : true,
    }
);

export const Property = mongoose.model('Cat', propertySchema);