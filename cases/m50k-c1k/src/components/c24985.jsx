import React from 'react';
const LABEL_24985 = 'component_24985';
export function Component24985({ value = 24985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24985, 'data-value': derived.doubled }, children);
}
export default Component24985;
