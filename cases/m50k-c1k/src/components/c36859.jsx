import React from 'react';
const LABEL_36859 = 'component_36859';
export function Component36859({ value = 36859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36859, 'data-value': derived.doubled }, children);
}
export default Component36859;
