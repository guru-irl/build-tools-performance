import React from 'react';
const LABEL_12859 = 'component_12859';
export function Component12859({ value = 12859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12859, 'data-value': derived.doubled }, children);
}
export default Component12859;
