import React from 'react';
const LABEL_37170 = 'component_37170';
export function Component37170({ value = 37170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37170, 'data-value': derived.doubled }, children);
}
export default Component37170;
