export const formatCurrency = (number: number): string => {
    return new Intl.NumberFormat('id-ID', { style: 'decimal' })
        .format(number)
        .toString();
};