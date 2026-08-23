import React from 'react';
const LABEL_3528 = 'component_3528';
export function Component3528({ value = 3528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3528, 'data-value': derived.doubled }, children);
}
export default Component3528;
