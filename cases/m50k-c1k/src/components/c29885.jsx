import React from 'react';
const LABEL_29885 = 'component_29885';
export function Component29885({ value = 29885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29885, 'data-value': derived.doubled }, children);
}
export default Component29885;
