export const fromCents = (amount: any) => {
  const number = Number(amount);

  return number ? number / 100 : amount;
}

export const toCents = (amount: string|number) => {
  if (typeof amount !== 'string' && typeof amount !== 'number') {
    console.warn('Amount passed to "toCents" function be of type String or Number.');

    return amount;
  }
 
  return Math.round(100 * parseFloat(typeof amount === 'string' ? amount.replace(/[$,]/g, '') : String(amount)));
}

export const asMoney = (value: number, currency = 'BRL') => {
  return fromCents(value || 0).toLocaleString('en-US', {
    currency,
    style: 'currency'
  });
}