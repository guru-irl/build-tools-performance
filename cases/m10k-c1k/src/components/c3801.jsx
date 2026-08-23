import React from 'react';
const LABEL_3801 = 'component_3801';
export function Component3801({ value = 3801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3801, 'data-value': derived.doubled }, children);
}
export default Component3801;
