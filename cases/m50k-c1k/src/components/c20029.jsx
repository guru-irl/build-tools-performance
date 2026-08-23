import React from 'react';
const LABEL_20029 = 'component_20029';
export function Component20029({ value = 20029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20029, 'data-value': derived.doubled }, children);
}
export default Component20029;
