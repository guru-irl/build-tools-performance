import React from 'react';
const LABEL_18715 = 'component_18715';
export function Component18715({ value = 18715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18715, 'data-value': derived.doubled }, children);
}
export default Component18715;
