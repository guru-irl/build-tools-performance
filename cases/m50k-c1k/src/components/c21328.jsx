import React from 'react';
const LABEL_21328 = 'component_21328';
export function Component21328({ value = 21328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21328, 'data-value': derived.doubled }, children);
}
export default Component21328;
