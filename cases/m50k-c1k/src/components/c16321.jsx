import React from 'react';
const LABEL_16321 = 'component_16321';
export function Component16321({ value = 16321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16321, 'data-value': derived.doubled }, children);
}
export default Component16321;
