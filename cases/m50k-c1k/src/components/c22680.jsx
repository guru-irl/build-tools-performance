import React from 'react';
const LABEL_22680 = 'component_22680';
export function Component22680({ value = 22680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22680, 'data-value': derived.doubled }, children);
}
export default Component22680;
