import React from 'react';
const LABEL_35619 = 'component_35619';
export function Component35619({ value = 35619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35619, 'data-value': derived.doubled }, children);
}
export default Component35619;
