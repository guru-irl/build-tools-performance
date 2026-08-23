import React from 'react';
const LABEL_10837 = 'component_10837';
export function Component10837({ value = 10837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10837, 'data-value': derived.doubled }, children);
}
export default Component10837;
