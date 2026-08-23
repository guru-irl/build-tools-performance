import React from 'react';
const LABEL_29715 = 'component_29715';
export function Component29715({ value = 29715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29715, 'data-value': derived.doubled }, children);
}
export default Component29715;
