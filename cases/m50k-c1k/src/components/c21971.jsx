import React from 'react';
const LABEL_21971 = 'component_21971';
export function Component21971({ value = 21971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21971, 'data-value': derived.doubled }, children);
}
export default Component21971;
