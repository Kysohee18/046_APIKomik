const { genre } = require("../models");

exports.getAllGenre = async (req, res) => {
    try {
        const genres = await genre.findAll();
        res.json(genres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getGenreById = async (req, res) => {
    try {
        const data = await genre.findByPk(req.params.id);
        if (!data) return res.status(404).json({ message: "Genre tidak ditemukan" });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createGenre = async (req, res) => {
    try {
        const newGenre = await genre.create(req.body);
        res.status(201).json(newGenre);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateGenre = async (req, res) => {
    try {
        const updated = await genre.update(req.body, { where: { id: req.params.id } });
        if (updated[0] === 0) return res.status(404).json({ message: "Genre tidak ditemukan" });
        res.json({ message: "Genre berhasil diupdate" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteGenre = async (req, res) => {
    try {
        const deleted = await genre.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ message: "Genre tidak ditemukan" });
        res.json({ message: "Genre berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
