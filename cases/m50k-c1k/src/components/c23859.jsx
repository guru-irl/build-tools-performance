import React from 'react';
const LABEL_23859 = 'component_23859';
export function Component23859({ value = 23859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23859, 'data-value': derived.doubled }, children);
}
export default Component23859;
