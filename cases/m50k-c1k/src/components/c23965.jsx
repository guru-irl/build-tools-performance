import React from 'react';
const LABEL_23965 = 'component_23965';
export function Component23965({ value = 23965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23965, 'data-value': derived.doubled }, children);
}
export default Component23965;
