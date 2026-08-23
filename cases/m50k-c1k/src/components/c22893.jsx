import React from 'react';
const LABEL_22893 = 'component_22893';
export function Component22893({ value = 22893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22893, 'data-value': derived.doubled }, children);
}
export default Component22893;
