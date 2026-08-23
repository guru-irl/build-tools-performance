import React from 'react';
const LABEL_17161 = 'component_17161';
export function Component17161({ value = 17161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17161, 'data-value': derived.doubled }, children);
}
export default Component17161;
