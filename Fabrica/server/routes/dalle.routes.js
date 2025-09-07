import express, { response } from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from Stable Diffusion ROUTES" });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await axios.post(
            'https://api.stability.ai/v1/generation/stable-diffusion-512-v2-0/text-to-image',
            {
                prompt,
                num_images: 1,
                width: 1024,
                height: 1024,
                // response_format: 'base64'

                
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.STABILITY_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const image = response.data.artifacts[0].base64;

        res.status(200).json({ photo: image });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

export default router;
