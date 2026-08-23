import React from 'react';
const LABEL_33629 = 'component_33629';
export function Component33629({ value = 33629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33629, 'data-value': derived.doubled }, children);
}
export default Component33629;
