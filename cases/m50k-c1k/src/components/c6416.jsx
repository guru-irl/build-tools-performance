import React from 'react';
const LABEL_6416 = 'component_6416';
export function Component6416({ value = 6416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6416, 'data-value': derived.doubled }, children);
}
export default Component6416;
