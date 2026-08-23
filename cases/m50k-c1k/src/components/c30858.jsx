import React from 'react';
const LABEL_30858 = 'component_30858';
export function Component30858({ value = 30858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30858, 'data-value': derived.doubled }, children);
}
export default Component30858;
