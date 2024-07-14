import { create } from "zustand";

const calculateDiscount = (numDates) => {
  if (numDates > 14) return 0.2;
  if (numDates > 7) return 0.15;
  if (numDates > 3) return 0.1;
  return 0.0;
};

const useDateStore = create((set) => ({
  selectedDates: [],
  subTotal: 0.0,
  discount: 0.0,
  total: 0.0,

  toggleDate: (dateObj) =>
    set((state) => {
      const existingIndex = state.selectedDates.findIndex(
        (d) => d.date === dateObj.date && d.type === dateObj.type
      );

      let updatedDates;
      if (existingIndex !== -1) {
        updatedDates = state.selectedDates.filter(
          (d, i) => i !== existingIndex
        );
      } else {
        updatedDates = [...state.selectedDates, dateObj];
      }

      // Calculate subtotal
      const subTotal = updatedDates.reduce(
        (sum, d) => sum + parseFloat(d.p_value),
        0
      );

      // Calculate discount
      const discountPercentage = calculateDiscount(updatedDates.length);
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
  deleteItem: (index) =>
    set((state) => {
      const newDates = state.selectedDates.filter((_, i) => i !== index);

      // Recalculate subtotal
      const subTotal = newDates.reduce(
        (sum, d) => sum + parseFloat(d.p_value),
        0
      );

      // Calculate discount
      const discountPercentage = calculateDiscount(newDates.length);
      const discount = subTotal * discountPercentage;

      // Calculate total
      const total = subTotal - discount;

      return {
        selectedDates: newDates,
        subTotal,
        discount,
        total,
      };
    }),
  updateDates: (updatedDates) => set({ selectedDates: updatedDates }),
}));

export default useDateStore;
