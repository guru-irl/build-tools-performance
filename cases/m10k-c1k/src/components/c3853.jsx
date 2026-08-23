import React from 'react';
const LABEL_3853 = 'component_3853';
export function Component3853({ value = 3853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3853, 'data-value': derived.doubled }, children);
}
export default Component3853;
