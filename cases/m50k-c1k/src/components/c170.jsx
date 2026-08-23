import React from 'react';
const LABEL_170 = 'component_170';
export function Component170({ value = 170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_170, 'data-value': derived.doubled }, children);
}
export default Component170;
