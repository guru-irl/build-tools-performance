import React from 'react';
const LABEL_30704 = 'component_30704';
export function Component30704({ value = 30704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30704, 'data-value': derived.doubled }, children);
}
export default Component30704;
