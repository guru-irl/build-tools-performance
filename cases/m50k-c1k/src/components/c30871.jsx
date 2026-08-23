import React from 'react';
const LABEL_30871 = 'component_30871';
export function Component30871({ value = 30871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30871, 'data-value': derived.doubled }, children);
}
export default Component30871;
