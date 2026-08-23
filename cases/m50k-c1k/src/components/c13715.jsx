import React from 'react';
const LABEL_13715 = 'component_13715';
export function Component13715({ value = 13715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13715, 'data-value': derived.doubled }, children);
}
export default Component13715;
