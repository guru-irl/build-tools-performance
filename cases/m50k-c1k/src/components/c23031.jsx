import React from 'react';
const LABEL_23031 = 'component_23031';
export function Component23031({ value = 23031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23031, 'data-value': derived.doubled }, children);
}
export default Component23031;
