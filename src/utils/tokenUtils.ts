export function getUserFieldFromToken(field: string): string {
  const token = localStorage.getItem('accessToken');
  if (!token) return '';

  const parts = token.split('.');
  if (parts.length !== 3) return '';

  try {
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
    const json = decodeURIComponent(
      atob(padded)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    const payload = JSON.parse(json);

    return typeof payload[field] === 'string' ? payload[field] : '';
  } catch {
    return '';
  }
}
