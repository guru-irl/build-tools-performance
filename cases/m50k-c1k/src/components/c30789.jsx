import React from 'react';
const LABEL_30789 = 'component_30789';
export function Component30789({ value = 30789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30789, 'data-value': derived.doubled }, children);
}
export default Component30789;
