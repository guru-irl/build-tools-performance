import React from 'react';
const LABEL_12211 = 'component_12211';
export function Component12211({ value = 12211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12211, 'data-value': derived.doubled }, children);
}
export default Component12211;
