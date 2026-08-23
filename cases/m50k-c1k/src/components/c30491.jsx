import React from 'react';
const LABEL_30491 = 'component_30491';
export function Component30491({ value = 30491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30491, 'data-value': derived.doubled }, children);
}
export default Component30491;
