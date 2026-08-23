import React from 'react';
const LABEL_12574 = 'component_12574';
export function Component12574({ value = 12574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12574, 'data-value': derived.doubled }, children);
}
export default Component12574;
