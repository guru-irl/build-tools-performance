import React from 'react';
const LABEL_21341 = 'component_21341';
export function Component21341({ value = 21341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21341, 'data-value': derived.doubled }, children);
}
export default Component21341;
