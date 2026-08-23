import React from 'react';
const LABEL_37732 = 'component_37732';
export function Component37732({ value = 37732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37732, 'data-value': derived.doubled }, children);
}
export default Component37732;
