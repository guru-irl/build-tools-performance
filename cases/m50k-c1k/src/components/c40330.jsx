import React from 'react';
const LABEL_40330 = 'component_40330';
export function Component40330({ value = 40330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40330, 'data-value': derived.doubled }, children);
}
export default Component40330;
