import React from 'react';
const LABEL_3571 = 'component_3571';
export function Component3571({ value = 3571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3571, 'data-value': derived.doubled }, children);
}
export default Component3571;
