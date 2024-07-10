const Proveedor = require('../models/Proveedor');

// Función para agregar proveedores
exports.agregarProveedor = async (req, res) => {
    try {
        let proveedor = new Proveedor(req.body);
        await proveedor.save();
        res.send(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un proveedor');
    }
}

//Función que nos va a mostrar todos los proveedores
exports.mostrarProveedor = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los proveedores');
    }
}

// Función para buscar un proveedor por ID
exports.buscarProveedor = async (req, res) => {
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if (!proveedor) {
            return res.status(404).json({ msg: 'No se encuentra el proveedor' });
        }
        res.send(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar el proveedor');
    }
}

// Función para actualizar un proveedor
exports.actualizarProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findOneAndUpdate(
            {_id: req.params.id}, req.body);
            if (!proveedor) res.status(404).send("proveedor no encontrado");
            else
            res.json(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar el proveedor");
    }
};

// Función para modificar un proveedor
exports.modificarProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        );
        if (!proveedor) {
            return res.status(404).send('Proveedor no encontrado');
        }
        res.json(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el proveedor');
    }
}

// Función para eliminar un proveedor
exports.eliminarProveedor = async (req, res) => {
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if (!proveedor) {
            return res.status(404).send('Proveedor no encontrado');
        } else {
            await Proveedor.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: "El proveedor ha sido eliminado" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el proveedor');
    }
}
