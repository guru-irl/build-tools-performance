import React from 'react';
const LABEL_653 = 'component_653';
export function Component653({ value = 653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_653, 'data-value': derived.doubled }, children);
}
export default Component653;
