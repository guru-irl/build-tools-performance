import React from 'react';
const LABEL_21437 = 'component_21437';
export function Component21437({ value = 21437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21437, 'data-value': derived.doubled }, children);
}
export default Component21437;
