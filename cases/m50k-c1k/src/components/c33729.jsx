import React from 'react';
const LABEL_33729 = 'component_33729';
export function Component33729({ value = 33729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33729, 'data-value': derived.doubled }, children);
}
export default Component33729;
