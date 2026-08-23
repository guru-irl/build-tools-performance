import React from 'react';
const LABEL_38542 = 'component_38542';
export function Component38542({ value = 38542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38542, 'data-value': derived.doubled }, children);
}
export default Component38542;
