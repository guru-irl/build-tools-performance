import React from 'react';
const LABEL_21835 = 'component_21835';
export function Component21835({ value = 21835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21835, 'data-value': derived.doubled }, children);
}
export default Component21835;
