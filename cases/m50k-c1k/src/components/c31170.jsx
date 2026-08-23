import React from 'react';
const LABEL_31170 = 'component_31170';
export function Component31170({ value = 31170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31170, 'data-value': derived.doubled }, children);
}
export default Component31170;
