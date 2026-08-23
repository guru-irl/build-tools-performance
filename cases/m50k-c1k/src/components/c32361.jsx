import React from 'react';
const LABEL_32361 = 'component_32361';
export function Component32361({ value = 32361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32361, 'data-value': derived.doubled }, children);
}
export default Component32361;
