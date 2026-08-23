import React from 'react';
const LABEL_12955 = 'component_12955';
export function Component12955({ value = 12955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12955, 'data-value': derived.doubled }, children);
}
export default Component12955;
