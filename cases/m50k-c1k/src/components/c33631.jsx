import React from 'react';
const LABEL_33631 = 'component_33631';
export function Component33631({ value = 33631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33631, 'data-value': derived.doubled }, children);
}
export default Component33631;
