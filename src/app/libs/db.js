import mongoose from "mongoose"

 const connectionDB =async () => {
        try {
            await mongoose.connect(process.env.MONGODB_URl)
            console.log("connected");
        } catch (error) {
            alert("not connected", error)
        }
}


export default connectionDB
