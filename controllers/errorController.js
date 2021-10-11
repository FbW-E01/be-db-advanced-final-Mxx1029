import express from 'express';
const router = express.Router();

router.use((error, request, response, next) => {
    let status = 404;
    let message = "Resource not found";

    if (error) {
        status = error.status || 500;
        message = error.message;
    }

    response.status(status);
    response.send(message);
});

export default router;