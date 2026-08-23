import React from 'react';
const LABEL_13985 = 'component_13985';
export function Component13985({ value = 13985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13985, 'data-value': derived.doubled }, children);
}
export default Component13985;
