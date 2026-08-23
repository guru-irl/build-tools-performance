import React from 'react';
const LABEL_12053 = 'component_12053';
export function Component12053({ value = 12053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12053, 'data-value': derived.doubled }, children);
}
export default Component12053;
