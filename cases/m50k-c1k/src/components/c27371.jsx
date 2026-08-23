import React from 'react';
const LABEL_27371 = 'component_27371';
export function Component27371({ value = 27371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27371, 'data-value': derived.doubled }, children);
}
export default Component27371;
