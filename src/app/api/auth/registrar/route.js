import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import { prisma } from '@/libs/db'

export async function POST(request) {
    try {
        const data = await request.json()

        const userEmail = await prisma.usuarios.findUnique({
            where: {
                email: data.email
            }
        })
        if (userEmail) {
            return NextResponse.json({
                Message: "El Email ya existe"
            }, {
                status: 400
            })
        }

        const userName = await prisma.usuarios.findUnique({
            where: {
                username: data.username
            }
        })
        if (userName) {
            return NextResponse.json({
                Message: "El Username ya existe"
            }, {
                status: 400
            })
        }
        const contrahash = await bcrypt.hash(data.contrasena, 10);
        const newUser = await prisma.usuarios.create({
            data: {
                nombre: data.nombre,
                apellido: data.apellido,
                username: data.username,
                contrasena: contrahash,
                email: data.email,
                rol: data.rol,
            },
        });

        return NextResponse.json(newUser);
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}