import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from '@/libs/db'
import bcrypt from 'bcrypt'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: "*****" },
            },
            async authorize(credentials, req) {
                console.log(credentials);
                const userFound = await prisma.usuarios.findUnique({
                    where: {
                        username: credentials.username
                    }
                })
                console.log(userFound);
                if (!userFound) throw new Error('Usuario no encontrado')
                const matchPassword = await bcrypt.compare(credentials.password, userFound.contrasena)
                if (!matchPassword) throw new Error('Contraseña incorrecta')

                return {
                    id: userFound.id,
                    nombre: userFound.username,
                    email: userFound.email,
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    }
};

const handler = NextAuth(authOptions);

    export { handler as GET, handler as POST };