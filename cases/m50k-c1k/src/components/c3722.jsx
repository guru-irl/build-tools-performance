import React from 'react';
const LABEL_3722 = 'component_3722';
export function Component3722({ value = 3722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3722, 'data-value': derived.doubled }, children);
}
export default Component3722;
