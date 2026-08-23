import React from 'react';
const LABEL_15152 = 'component_15152';
export function Component15152({ value = 15152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15152, 'data-value': derived.doubled }, children);
}
export default Component15152;
