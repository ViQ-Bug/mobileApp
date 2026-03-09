import {v2 as cloudinary} from "cloudinary"
import {ENV} from "./env.js";

cloudinary.config({
    cloud_nameL: ENV.COULDINARY_CLOUD_NAME,
    api_key: ENV.COULDINARY_API_KEY,
    api_secret: ENV.COULDINARY_API_SECRET
})

export default cloudinary