import React from 'react';
const LABEL_29416 = 'component_29416';
export function Component29416({ value = 29416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29416, 'data-value': derived.doubled }, children);
}
export default Component29416;
