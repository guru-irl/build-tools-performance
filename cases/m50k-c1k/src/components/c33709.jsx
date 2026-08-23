import React from 'react';
const LABEL_33709 = 'component_33709';
export function Component33709({ value = 33709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33709, 'data-value': derived.doubled }, children);
}
export default Component33709;
