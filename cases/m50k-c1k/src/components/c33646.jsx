import React from 'react';
const LABEL_33646 = 'component_33646';
export function Component33646({ value = 33646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33646, 'data-value': derived.doubled }, children);
}
export default Component33646;
