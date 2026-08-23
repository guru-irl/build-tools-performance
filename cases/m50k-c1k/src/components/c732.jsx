import React from 'react';
const LABEL_732 = 'component_732';
export function Component732({ value = 732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_732, 'data-value': derived.doubled }, children);
}
export default Component732;
