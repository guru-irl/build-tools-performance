import React from 'react';
const LABEL_17653 = 'component_17653';
export function Component17653({ value = 17653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17653, 'data-value': derived.doubled }, children);
}
export default Component17653;
