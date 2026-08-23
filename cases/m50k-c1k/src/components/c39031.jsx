import React from 'react';
const LABEL_39031 = 'component_39031';
export function Component39031({ value = 39031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39031, 'data-value': derived.doubled }, children);
}
export default Component39031;
