import React from 'react';
const LABEL_30202 = 'component_30202';
export function Component30202({ value = 30202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30202, 'data-value': derived.doubled }, children);
}
export default Component30202;
