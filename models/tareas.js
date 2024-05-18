import pool from "../config/db.js";

export const agregar = async (titulo, artista, tono) => {
    let client;
    try {
        client = await pool.connect();
        await client.query(`INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3)`, [titulo, artista, tono]);
    } catch (error) {
        console.error('Error al agregar la cancion:', error);
    } finally {
        if (client) client.release();
    }
};

export const consultar = async () => {
    let client;
    try {
        client = await pool.connect();
        const result = await client.query(`SELECT * FROM canciones`);
        return result.rows;
    } catch (error) {
        console.error('Error al consultar la tabla:', error);
    } finally {
        if (client) client.release();
    }
};

export const modificar = async (id, titulo, artista, tono) => {
    let client;
    try {
        client = await pool.connect();
        await client.query(`UPDATE canciones SET titulo = $2, artista = $3, tono = $4 WHERE id = $1`, [id, titulo, artista, tono]);
    } catch (error) {
        console.error('Error al editar la cancion:', error);
    } finally {
        if (client) client.release();
    }
};

export const eliminar = async ( id ) => {
    let client;
    try {
        client = await pool.connect();
        await client.query(`DELETE FROM canciones WHERE id = $1`, [id]);
    } catch (error) {
        console.error('Error al eliminar la canción:', error);
    } finally {
        if (client) client.release();
    }
};