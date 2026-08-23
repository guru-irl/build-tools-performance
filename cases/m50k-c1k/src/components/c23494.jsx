import React from 'react';
const LABEL_23494 = 'component_23494';
export function Component23494({ value = 23494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23494, 'data-value': derived.doubled }, children);
}
export default Component23494;
