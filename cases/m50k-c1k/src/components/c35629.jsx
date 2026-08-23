import React from 'react';
const LABEL_35629 = 'component_35629';
export function Component35629({ value = 35629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35629, 'data-value': derived.doubled }, children);
}
export default Component35629;
