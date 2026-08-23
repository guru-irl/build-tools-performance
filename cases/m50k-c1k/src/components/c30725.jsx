import React from 'react';
const LABEL_30725 = 'component_30725';
export function Component30725({ value = 30725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30725, 'data-value': derived.doubled }, children);
}
export default Component30725;
