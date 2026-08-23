import React from 'react';
const LABEL_21111 = 'component_21111';
export function Component21111({ value = 21111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21111, 'data-value': derived.doubled }, children);
}
export default Component21111;
