import React from 'react';
const LABEL_12431 = 'component_12431';
export function Component12431({ value = 12431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12431, 'data-value': derived.doubled }, children);
}
export default Component12431;
