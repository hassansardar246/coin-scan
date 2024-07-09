import { create } from "zustand";

const calculateDiscount = (numDates) => {
  if (numDates >= 14) return 0.2;
  if (numDates >= 7) return 0.15;
  if (numDates >= 3) return 0.1;
  return 0.0;
};

const useDateStore = create((set) => ({
  selectedDates: {},
  subTotal: 0.0,
  discount: 0.0,
  total: 0.0,

  toggleDate: (type, dateObj) =>
    set((state) => {
      const currentDates = state.selectedDates[type] || [];
      const dateIndex = currentDates.findIndex((d) => d.date === dateObj.date);

      let updatedDates;
      if (dateIndex !== -1) {
        updatedDates = {
          ...state.selectedDates,
          [type]: currentDates.filter((d) => d.date !== dateObj.date),
        };
      } else {
        updatedDates = {
          ...state.selectedDates,
          [type]: [...currentDates, dateObj],
        };
      }

      // Flatten updated dates
      const flattenedDates = Object.values(updatedDates).flat();

      // Calculate subtotal
      const subTotal = flattenedDates.reduce(
        (sum, d) => sum + parseFloat(d.p_value),
        0
      );

      // Calculate discount
      const discountPercentage = calculateDiscount(flattenedDates.length);
      const discount = subTotal * discountPercentage;

      // Calculate total
      const total = subTotal - discount;

      return {
        selectedDates: updatedDates,
        subTotal,
        discount,
        total,
      };
    }),
}));

export default useDateStore;
