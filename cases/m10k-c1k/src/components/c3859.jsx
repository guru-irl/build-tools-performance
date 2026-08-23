import React from 'react';
const LABEL_3859 = 'component_3859';
export function Component3859({ value = 3859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3859, 'data-value': derived.doubled }, children);
}
export default Component3859;
