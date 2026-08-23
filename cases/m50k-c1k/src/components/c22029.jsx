import React from 'react';
const LABEL_22029 = 'component_22029';
export function Component22029({ value = 22029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22029, 'data-value': derived.doubled }, children);
}
export default Component22029;
