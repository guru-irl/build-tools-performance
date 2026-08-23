import React from 'react';
const LABEL_12380 = 'component_12380';
export function Component12380({ value = 12380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12380, 'data-value': derived.doubled }, children);
}
export default Component12380;
