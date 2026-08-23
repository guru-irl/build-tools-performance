import React from 'react';
const LABEL_21621 = 'component_21621';
export function Component21621({ value = 21621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21621, 'data-value': derived.doubled }, children);
}
export default Component21621;
