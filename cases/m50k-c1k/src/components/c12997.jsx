import React from 'react';
const LABEL_12997 = 'component_12997';
export function Component12997({ value = 12997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12997, 'data-value': derived.doubled }, children);
}
export default Component12997;
