import React from 'react';
const LABEL_32619 = 'component_32619';
export function Component32619({ value = 32619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32619, 'data-value': derived.doubled }, children);
}
export default Component32619;
