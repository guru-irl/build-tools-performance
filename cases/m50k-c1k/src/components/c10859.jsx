import React from 'react';
const LABEL_10859 = 'component_10859';
export function Component10859({ value = 10859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10859, 'data-value': derived.doubled }, children);
}
export default Component10859;
