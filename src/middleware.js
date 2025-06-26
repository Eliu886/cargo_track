export { default } from "next-auth/middleware";

export const config = { matcher: ["/auth/registrar","/auth/almacen","/auth/cliente","/auth/envio","/auth/paquete"] }