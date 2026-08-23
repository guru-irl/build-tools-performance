import React from 'react';
const LABEL_28649 = 'component_28649';
export function Component28649({ value = 28649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28649, 'data-value': derived.doubled }, children);
}
export default Component28649;
