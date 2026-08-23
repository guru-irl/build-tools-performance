import React from 'react';
const LABEL_12601 = 'component_12601';
export function Component12601({ value = 12601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12601, 'data-value': derived.doubled }, children);
}
export default Component12601;
