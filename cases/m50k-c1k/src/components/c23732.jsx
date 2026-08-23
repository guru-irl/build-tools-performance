import React from 'react';
const LABEL_23732 = 'component_23732';
export function Component23732({ value = 23732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23732, 'data-value': derived.doubled }, children);
}
export default Component23732;
