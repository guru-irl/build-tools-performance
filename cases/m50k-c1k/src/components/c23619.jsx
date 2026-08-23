import React from 'react';
const LABEL_23619 = 'component_23619';
export function Component23619({ value = 23619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23619, 'data-value': derived.doubled }, children);
}
export default Component23619;
