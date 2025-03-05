declare module '@emailjs/browser' {
  export function send(service_id: string, template_id: string, template_params: any, user_id: string): Promise<any>;
}
