const formatPrice = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'AUD',
        minimumFractionDigits: 0,
    });

    return formatter.format(value);
};

export default formatPrice;
