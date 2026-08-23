import React from 'react';
const LABEL_7619 = 'component_7619';
export function Component7619({ value = 7619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7619, 'data-value': derived.doubled }, children);
}
export default Component7619;
