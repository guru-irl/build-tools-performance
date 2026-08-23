import React from 'react';
const LABEL_12182 = 'component_12182';
export function Component12182({ value = 12182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12182, 'data-value': derived.doubled }, children);
}
export default Component12182;
