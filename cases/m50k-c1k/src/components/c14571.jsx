import React from 'react';
const LABEL_14571 = 'component_14571';
export function Component14571({ value = 14571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14571, 'data-value': derived.doubled }, children);
}
export default Component14571;
