import React from 'react';
const LABEL_6629 = 'component_6629';
export function Component6629({ value = 6629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6629, 'data-value': derived.doubled }, children);
}
export default Component6629;
