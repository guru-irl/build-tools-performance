import React from 'react';
const LABEL_23997 = 'component_23997';
export function Component23997({ value = 23997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23997, 'data-value': derived.doubled }, children);
}
export default Component23997;
