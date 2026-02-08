const PHONE_NUMBER = '08481842879';
const PHONE_DISPLAY = '084818 42879';
const EMAIL = 'science.squad.kolkata@gmail.com';

export function getPhoneLink(): string {
  return `tel:${PHONE_NUMBER}`;
}

export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${PHONE_NUMBER}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getEmailLink(subject?: string): string {
  const baseUrl = `mailto:${EMAIL}`;
  if (subject) {
    return `${baseUrl}?subject=${encodeURIComponent(subject)}`;
  }
  return baseUrl;
}

export { PHONE_DISPLAY, EMAIL };
