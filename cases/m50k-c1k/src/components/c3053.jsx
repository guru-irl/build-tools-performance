import React from 'react';
const LABEL_3053 = 'component_3053';
export function Component3053({ value = 3053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3053, 'data-value': derived.doubled }, children);
}
export default Component3053;
