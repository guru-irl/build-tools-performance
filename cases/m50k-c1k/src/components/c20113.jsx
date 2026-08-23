import React from 'react';
const LABEL_20113 = 'component_20113';
export function Component20113({ value = 20113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20113, 'data-value': derived.doubled }, children);
}
export default Component20113;
