import React from 'react';
const LABEL_12919 = 'component_12919';
export function Component12919({ value = 12919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12919, 'data-value': derived.doubled }, children);
}
export default Component12919;
