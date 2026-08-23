import React from 'react';
const LABEL_29859 = 'component_29859';
export function Component29859({ value = 29859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29859, 'data-value': derived.doubled }, children);
}
export default Component29859;
