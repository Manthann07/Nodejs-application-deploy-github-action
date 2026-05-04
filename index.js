import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({
        message: 'Node.js application successfully deployed on AWS EC2 using GitHub Actions!'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;