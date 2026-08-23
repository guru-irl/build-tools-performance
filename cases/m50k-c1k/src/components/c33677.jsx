import React from 'react';
const LABEL_33677 = 'component_33677';
export function Component33677({ value = 33677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33677, 'data-value': derived.doubled }, children);
}
export default Component33677;
