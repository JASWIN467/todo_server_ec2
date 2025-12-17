import todoCollection from "../Model/todoModel.js";

export const addTodo = async (req, res) => {
    try {
        const data = new todoCollection(req.body);
        await data.save();
        res.status(201).json({ mess: "data has been stored" });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ mess: "Todo already exists. Please use a different text." });
        } else {
            res.status(500).json({ mess: err.message });
        }
    }
}

export const getTodo = async (req, res) => {

    try {
        const data = await todoCollection.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

export const updateTodo = async (req, res) => {
    try {
        const data = await todoCollection.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: err });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        console.log('Deleting todo with ID:', req.params.id);
        const result = await todoCollection.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json({ message: "Todo deleted successfully" });
    } catch (err) {
        console.error('Delete error:', err);
        res.status(500).json({ message: err.message });
    }
}
