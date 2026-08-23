import React from 'react';
const LABEL_3750 = 'component_3750';
export function Component3750({ value = 3750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3750, 'data-value': derived.doubled }, children);
}
export default Component3750;
