import React from 'react';
const LABEL_2546 = 'component_2546';
export function Component2546({ value = 2546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2546, 'data-value': derived.doubled }, children);
}
export default Component2546;
