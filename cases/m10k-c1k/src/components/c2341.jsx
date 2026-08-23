import React from 'react';
const LABEL_2341 = 'component_2341';
export function Component2341({ value = 2341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2341, 'data-value': derived.doubled }, children);
}
export default Component2341;
