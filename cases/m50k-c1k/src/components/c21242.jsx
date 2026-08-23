import React from 'react';
const LABEL_21242 = 'component_21242';
export function Component21242({ value = 21242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21242, 'data-value': derived.doubled }, children);
}
export default Component21242;
