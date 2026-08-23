import React from 'react';
const LABEL_44519 = 'component_44519';
export function Component44519({ value = 44519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44519, 'data-value': derived.doubled }, children);
}
export default Component44519;
