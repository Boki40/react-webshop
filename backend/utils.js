import jwt from 'jsonwebtoken'
import env from "dotenv"

export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user.id,
            name: user.name,
            email: user.email
        },
        process.env.JWT_SECRET || 'titkos_uzenet',
        {
            expiresIn: '30d'
        }
    )
}