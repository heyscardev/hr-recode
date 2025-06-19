"use server";
import { ENVS } from "@/config/envs";
import { Resend } from "resend";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactinfo = async (formData: FormData) => {
  const resend = new Resend(ENVS.RESEND_API_KEY);
  
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo Mensaje de Contacto - Heyscar Recode</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #0f172a; color: #ffffff; line-height: 1.6;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a;">
            <tr>
                <td align="center" style="padding: 20px;">
                    <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto;">
                        <!-- Header -->
                        <tr>
                            <td style="text-align: center; padding: 40px 0; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%); border-radius: 16px; margin-bottom: 40px; border: 1px solid rgba(59, 130, 246, 0.2);">
                                <div style="font-size: 28px; font-weight: bold; background: linear-gradient(135deg, #3b82f6, #14b8a6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 10px;">Heyscar Recode</div>
                                <div style="color: #94a3b8; font-size: 16px;">Nuevo mensaje de contacto recibido</div>
                            </td>
                        </tr>
                        
                        <!-- Spacing -->
                        <tr>
                            <td style="height: 30px;"></td>
                        </tr>
                        
                        <!-- Client Information -->
                        <tr>
                            <td style="background: linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.8) 100%); border: 1px solid rgba(75, 85, 99, 0.5); border-radius: 16px; padding: 30px; margin-bottom: 40px;">
                                <div style="font-size: 20px; font-weight: 600; color: #ffffff; margin-bottom: 25px; display: flex; align-items: center; gap: 10px;">
                                    <div style="width: 4px; height: 20px; background: linear-gradient(135deg, #3b82f6, #14b8a6); border-radius: 2px;"></div>
                                    Información del Cliente
                                </div>
                                
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td style="padding-bottom: 25px;">
                                            <div style="background: rgba(31, 41, 55, 0.5); border: 1px solid rgba(75, 85, 99, 0.3); border-radius: 12px; padding: 20px;">
                                                <div style="color: #94a3b8; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Nombre</div>
                                                <div style="color: #ffffff; font-size: 16px; font-weight: 500;">${formData.name}</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style="background: rgba(31, 41, 55, 0.5); border: 1px solid rgba(75, 85, 99, 0.3); border-radius: 12px; padding: 20px;">
                                                <div style="color: #94a3b8; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Email</div>
                                                <div style="color: #ffffff; font-size: 16px; font-weight: 500;">${formData.email}</div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        
                        <!-- Spacing -->
                        <tr>
                            <td style="height: 30px;"></td>
                        </tr>
                        
                        <!-- Message -->
                        <tr>
                            <td style="background: linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.8) 100%); border: 1px solid rgba(75, 85, 99, 0.5); border-radius: 16px; padding: 30px; margin-bottom: 40px;">
                                <div style="font-size: 20px; font-weight: 600; color: #ffffff; margin-bottom: 25px; display: flex; align-items: center; gap: 10px;">
                                    <div style="width: 4px; height: 20px; background: linear-gradient(135deg, #3b82f6, #14b8a6); border-radius: 2px;"></div>
                                    Mensaje
                                </div>
                                <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px; padding: 20px;">
                                    <div style="color: #e2e8f0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${formData.message}</div>
                                </div>
                            </td>
                        </tr>
                        
                        <!-- Spacing -->
                        <tr>
                            <td style="height: 30px;"></td>
                        </tr>
                        
                        <!-- Footer Info -->
                        <tr>
                            <td style="background: linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.8) 100%); border: 1px solid rgba(75, 85, 99, 0.5); border-radius: 16px; padding: 30px; margin-bottom: 40px;">
                                <div style="text-align: center;">
                                    <div style="margin-bottom: 20px;">
                                        <span style="display: inline-block; padding: 6px 12px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(20, 184, 166, 0.2)); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 8px; color: #60a5fa; font-size: 12px; font-weight: 500; margin: 5px;">Consulta Gratuita</span>
                                        <span style="display: inline-block; padding: 6px 12px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(20, 184, 166, 0.2)); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 8px; color: #60a5fa; font-size: 12px; font-weight: 500; margin: 5px;">Respuesta en 24h</span>
                                    </div>
                                    <div style="color: #94a3b8; font-size: 14px;">
                                        Este mensaje fue enviado desde el formulario de contacto de Heyscar Recode
                                    </div>
                                </div>
                            </td>
                        </tr>
                        
                        <!-- Spacing -->
                        <tr>
                            <td style="height: 30px;"></td>
                        </tr>
                        
                        <!-- Footer -->
                        <tr>
                            <td style="text-align: center; padding: 30px 0; color: #94a3b8; font-size: 14px;">
                                <p style="margin: 0;">© 2024 Heyscar Recode. Todos los derechos reservados.</p>
                                <p style="margin-top: 10px; margin-bottom: 0;">
                                    <a href="mailto:heyscarromero@gmail.com" style="color: #60a5fa; text-decoration: none;">heyscarromero@gmail.com</a> | 
                                    <a href="https://www.linkedin.com/company/heyscar-recode" style="color: #60a5fa; text-decoration: none;">LinkedIn</a>
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
  `;

  const { data, error } = await resend.emails.send({
    from: "recode@heyscar.dev",
    to: ["heyscarromero@gmail.com"],
    subject: `Nuevo contacto: ${formData.name} - Heyscar Recode`,
    html: htmlContent,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { data };
};
