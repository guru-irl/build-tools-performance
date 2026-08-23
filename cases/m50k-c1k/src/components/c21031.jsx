import React from 'react';
const LABEL_21031 = 'component_21031';
export function Component21031({ value = 21031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21031, 'data-value': derived.doubled }, children);
}
export default Component21031;
