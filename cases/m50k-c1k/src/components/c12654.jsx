import React from 'react';
const LABEL_12654 = 'component_12654';
export function Component12654({ value = 12654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12654, 'data-value': derived.doubled }, children);
}
export default Component12654;
