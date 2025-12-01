const { read_file, write_file } = require("../fs/file-manager")
const { v4 } = require('uuid')

// get
const getAllKorzinka= async (req, res) => {
    try {
        const data = read_file('korzinka.json')
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
// getone
const getOneKorzinka = async (req, res) => {
    try {
        const { id } = req.params;

        const data = read_file('korzinka.json')

        const foundedData = data.find(item => item.id === id)

        if (!foundedData) {
            return res.status(404).json({
                message: "korzinka not found"
            })
        }
        res.status(200).json(foundedData)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}



// post
const addKorzinka = async (req, res) => {
    try {
        const { name, price } = req.body;

        const fileData = read_file('korzinka.json');

        fileData.push({
            id: v4(),
            name,
            price
        })

        write_file('korzinka.json', fileData)

        res.status(201).json({
            message: "Added new korzinka"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// update
const updateKorzinka = async (req, res) => {
    try {
        const { name, price } = req.body;
        const { id } = req.params;

        const data = read_file('korzinka.json')
        const foundedData = data.find(item => item.id === id)

        if (!foundedData) {
            return res.status(404).json({
                message: "korzinka not found"
            })
        }

        data.forEach((item) => {
            if (item.id === id) {
                item.name = name ? name : item.name;
                item.price = price ? price : item.price;
            }
        });

        write_file('korzinka.json', data)
        res.status(200).json({
            message: "korzinka updated"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// delete
const deleteKorzinka = async (req, res) => {
    try {
        const { id } = req.params;

        const data = read_file('korzinka.json')
        const foundedData = data.find(item => item.id === id)

        if (!foundedData) {
            return res.status(404).json({
                message: "korzinka not found"
            })
        }

        data.forEach((item, index) => {
            if (item.id === id) {
                data.splice(index, 1);
            }
        });

        write_file('korzinka.json', data)
        res.status(200).json({
            message: "korzinka deleted"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAllKorzinka,
    getOneKorzinka,
    addKorzinka,
    updateKorzinka,
    deleteKorzinka
}