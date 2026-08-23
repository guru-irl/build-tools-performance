import React from 'react';
const LABEL_11161 = 'component_11161';
export function Component11161({ value = 11161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11161, 'data-value': derived.doubled }, children);
}
export default Component11161;
