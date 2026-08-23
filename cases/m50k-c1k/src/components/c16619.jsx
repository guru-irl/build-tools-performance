import React from 'react';
const LABEL_16619 = 'component_16619';
export function Component16619({ value = 16619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16619, 'data-value': derived.doubled }, children);
}
export default Component16619;
