import React from 'react';
const LABEL_22161 = 'component_22161';
export function Component22161({ value = 22161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22161, 'data-value': derived.doubled }, children);
}
export default Component22161;
