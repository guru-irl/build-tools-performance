import React from 'react';
const LABEL_21161 = 'component_21161';
export function Component21161({ value = 21161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21161, 'data-value': derived.doubled }, children);
}
export default Component21161;
