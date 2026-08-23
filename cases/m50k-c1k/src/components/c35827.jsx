import React from 'react';
const LABEL_35827 = 'component_35827';
export function Component35827({ value = 35827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35827, 'data-value': derived.doubled }, children);
}
export default Component35827;
