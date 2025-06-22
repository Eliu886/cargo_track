import { NextResponse } from 'next/server';
import { prisma } from '@/libs/db'

export async function POST(request) {
    try {
        const data = await request.json()

        const userEmail = await prisma.findUnique({
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

        const userName = await prisma.findUnique({
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

        const newUser = await prisma.usuarios.create({
            data
        });

        return NextResponse.json(newUser);
    } catch (error) {
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