import React from 'react';
const LABEL_12341 = 'component_12341';
export function Component12341({ value = 12341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12341, 'data-value': derived.doubled }, children);
}
export default Component12341;
