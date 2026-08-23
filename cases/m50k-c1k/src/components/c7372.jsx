import React from 'react';
const LABEL_7372 = 'component_7372';
export function Component7372({ value = 7372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7372, 'data-value': derived.doubled }, children);
}
export default Component7372;
