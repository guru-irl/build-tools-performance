import React from 'react';
const LABEL_3093 = 'component_3093';
export function Component3093({ value = 3093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3093, 'data-value': derived.doubled }, children);
}
export default Component3093;
