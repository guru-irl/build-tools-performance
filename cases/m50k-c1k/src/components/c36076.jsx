import React from 'react';
const LABEL_36076 = 'component_36076';
export function Component36076({ value = 36076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36076, 'data-value': derived.doubled }, children);
}
export default Component36076;
