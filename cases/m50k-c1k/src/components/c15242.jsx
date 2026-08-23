import React from 'react';
const LABEL_15242 = 'component_15242';
export function Component15242({ value = 15242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15242, 'data-value': derived.doubled }, children);
}
export default Component15242;
