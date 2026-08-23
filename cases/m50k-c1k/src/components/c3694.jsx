import React from 'react';
const LABEL_3694 = 'component_3694';
export function Component3694({ value = 3694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3694, 'data-value': derived.doubled }, children);
}
export default Component3694;
