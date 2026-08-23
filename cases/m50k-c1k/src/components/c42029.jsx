import React from 'react';
const LABEL_42029 = 'component_42029';
export function Component42029({ value = 42029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42029, 'data-value': derived.doubled }, children);
}
export default Component42029;
