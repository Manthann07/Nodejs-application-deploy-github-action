import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({
        message: 'Manthan Bhadaliya007 - Node.js Application with GitHub Actions and Docker',
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
