import React from 'react';
const LABEL_23893 = 'component_23893';
export function Component23893({ value = 23893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23893, 'data-value': derived.doubled }, children);
}
export default Component23893;
