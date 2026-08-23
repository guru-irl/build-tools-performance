import React from 'react';
const LABEL_20134 = 'component_20134';
export function Component20134({ value = 20134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20134, 'data-value': derived.doubled }, children);
}
export default Component20134;
