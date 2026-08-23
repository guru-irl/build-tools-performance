import React from 'react';
const LABEL_3759 = 'component_3759';
export function Component3759({ value = 3759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3759, 'data-value': derived.doubled }, children);
}
export default Component3759;
