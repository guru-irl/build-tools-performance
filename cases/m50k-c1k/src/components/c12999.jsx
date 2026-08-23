import React from 'react';
const LABEL_12999 = 'component_12999';
export function Component12999({ value = 12999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12999, 'data-value': derived.doubled }, children);
}
export default Component12999;
