import React from 'react';
const LABEL_15343 = 'component_15343';
export function Component15343({ value = 15343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15343, 'data-value': derived.doubled }, children);
}
export default Component15343;
