import Item from "../models/Item.js";

// create new item
export const createItem = async (req,res)=>{
    console.log(req.body)

    const newItem = new Item(req.body)
    console.log(newItem)
    try {
        const savedItem = await newItem.save()

        res.status(200).json({success:true,message:'Successfully created..',data:savedItem})
    }catch (err){
        res.status(500).json({success:false,message:'Not Created..'})

    }
};


//update item
export const updateItem = async (req,res) =>{

    const id = req.params.id

    try{

        const updatedItem = await Item.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({success:true,message:'Successfully updated..',data:updatedItem});
    }catch (err){
        res.status(500).json({success:false,message:'failed to update..'})
    }
};



//delete item
export const deleteItem = async (req,res) =>{
    const id = req.params.id

    try{

        await Item.findByIdAndDelete(id);

        res.status(200).json({success:true,message:'Successfully deleted..'});
    }catch (err){
        res.status(500).json({success:false,message:'failed to delete..'})
    }
};




//getSingle item
export const getSingleItem = async (req,res) =>{
    const id = req.params.id

    try{

        const item = await Item.findById(id);

        res.status(200).json({success:true,message:'Successfully Found..', data:item});
    }catch (err){
        res.status(404).json({success:false,message:'Not Found..'})
    }
};



//getAll item
export const getAllItem = async (req,res) =>{

    //for pagintion

    const page = parseInt(req.query.page)
    console.log(page)

    try{

        const items = await Item.find({})

        res.status(200).json({success:true,message:'Successfully found..',data:items})

    }catch (err){
        res.status(404).json({success:false,message:'Not Found..'})
    }
};

