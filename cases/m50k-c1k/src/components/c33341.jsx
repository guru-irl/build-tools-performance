import React from 'react';
const LABEL_33341 = 'component_33341';
export function Component33341({ value = 33341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33341, 'data-value': derived.doubled }, children);
}
export default Component33341;
