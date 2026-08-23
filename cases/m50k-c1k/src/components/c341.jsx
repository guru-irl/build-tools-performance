import React from 'react';
const LABEL_341 = 'component_341';
export function Component341({ value = 341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_341, 'data-value': derived.doubled }, children);
}
export default Component341;
