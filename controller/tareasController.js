import { agregar, consultar, modificar, eliminar } from '../models/tareas.js';

export const consultarCancion = async (req, res) => {
    try {
        const canciones = await consultar();
        res.status(201).json(canciones);
    } catch (error) {
        console.error('Error al consultar las cancion:', error);
        res.status(500).send('Error interno del servidor');
    }
};

export const agregarCancion = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    try {
        await agregar( titulo, artista, tono );
        res.status(201).send('Cancion agregada correctamente');
    } catch (error) {
        console.error('Error al agregar la cancion:', error);
        res.status(500).send('Error interno del servidor');
    }
};

export const modificarCancion = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, artista, tono } = req.body;

        await modificar( id, titulo, artista, tono );
        res.status(201).send('Cancion editada correctamente');
    } catch (error) {
        console.error('Error al editar la cancion:', error);
        res.status(500).send('Error interno del servidor');
    }
};

export const eliminarCancion = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        await eliminar(id);
        res.status(200).send('Cancion Eliminada correctamente');
    } catch (error) {
        console.error('Error al eliminar la cancion:', error);
        res.status(500).send('Error interno del servidor');
    }
};

