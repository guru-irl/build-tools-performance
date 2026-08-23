import React from 'react';
const LABEL_1416 = 'component_1416';
export function Component1416({ value = 1416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1416, 'data-value': derived.doubled }, children);
}
export default Component1416;
