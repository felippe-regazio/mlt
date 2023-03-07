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

export const isEmail = (email: string) => {
  return email.toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

export const dateBRStr = (date: Date): string => {
	return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
}

export const isSameDate = (dateA: Date, dateB: Date) => {
  return dateBRStr(dateA) === dateBRStr(dateB);
}

export const dateParagraph = (date: Date, alwaysComplete?: boolean) => {
  const today = new Date();
  const yesterday = new Date( new Date().setDate(new Date().getDate()-1) );

  if (!alwaysComplete) {
    if (isSameDate(date, today)) {
      return 'Hoje';
    }
  
    if (isSameDate(date, yesterday)) {
      return 'Ontem';
    }
  }

  return `${date.getDate()} de ${getMonthName(date.getMonth())} de ${date.getFullYear()}`;
}

export const getMonthName = (index: number) => {
  return [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ][index];
} 