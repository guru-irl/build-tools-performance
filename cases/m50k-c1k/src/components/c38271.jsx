import React from 'react';
const LABEL_38271 = 'component_38271';
export function Component38271({ value = 38271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38271, 'data-value': derived.doubled }, children);
}
export default Component38271;
