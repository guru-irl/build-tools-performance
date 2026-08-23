import React from 'react';
const LABEL_15859 = 'component_15859';
export function Component15859({ value = 15859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15859, 'data-value': derived.doubled }, children);
}
export default Component15859;
