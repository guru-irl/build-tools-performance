import React from 'react';
const LABEL_3789 = 'component_3789';
export function Component3789({ value = 3789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3789, 'data-value': derived.doubled }, children);
}
export default Component3789;
