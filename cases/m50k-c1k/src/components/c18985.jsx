import React from 'react';
const LABEL_18985 = 'component_18985';
export function Component18985({ value = 18985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18985, 'data-value': derived.doubled }, children);
}
export default Component18985;
