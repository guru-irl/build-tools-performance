import React from 'react';
const LABEL_22416 = 'component_22416';
export function Component22416({ value = 22416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22416, 'data-value': derived.doubled }, children);
}
export default Component22416;
