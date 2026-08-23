import React from 'react';
const LABEL_30454 = 'component_30454';
export function Component30454({ value = 30454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30454, 'data-value': derived.doubled }, children);
}
export default Component30454;
