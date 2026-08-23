import React from 'react';
const LABEL_14885 = 'component_14885';
export function Component14885({ value = 14885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14885, 'data-value': derived.doubled }, children);
}
export default Component14885;
