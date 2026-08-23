import React from 'react';
const LABEL_12031 = 'component_12031';
export function Component12031({ value = 12031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12031, 'data-value': derived.doubled }, children);
}
export default Component12031;
