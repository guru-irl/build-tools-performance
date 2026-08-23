import React from 'react';
const LABEL_12243 = 'component_12243';
export function Component12243({ value = 12243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12243, 'data-value': derived.doubled }, children);
}
export default Component12243;
