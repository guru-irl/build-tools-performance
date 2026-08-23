import React from 'react';
const LABEL_32340 = 'component_32340';
export function Component32340({ value = 32340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32340, 'data-value': derived.doubled }, children);
}
export default Component32340;
