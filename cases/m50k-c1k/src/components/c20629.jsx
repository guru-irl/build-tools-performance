import React from 'react';
const LABEL_20629 = 'component_20629';
export function Component20629({ value = 20629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20629, 'data-value': derived.doubled }, children);
}
export default Component20629;
