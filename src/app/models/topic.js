import mongoose, {Schema} from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

//creating colection in database
const Topic = mongoose.models.Topic || mongoose.model("Topic" , topicSchema)
export default Topic