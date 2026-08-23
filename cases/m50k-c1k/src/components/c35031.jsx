import React from 'react';
const LABEL_35031 = 'component_35031';
export function Component35031({ value = 35031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35031, 'data-value': derived.doubled }, children);
}
export default Component35031;
