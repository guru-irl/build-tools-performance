import React from 'react';
const LABEL_10619 = 'component_10619';
export function Component10619({ value = 10619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10619, 'data-value': derived.doubled }, children);
}
export default Component10619;
