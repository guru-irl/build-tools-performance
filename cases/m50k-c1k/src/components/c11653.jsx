import React from 'react';
const LABEL_11653 = 'component_11653';
export function Component11653({ value = 11653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11653, 'data-value': derived.doubled }, children);
}
export default Component11653;
