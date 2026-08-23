import React from 'react';
const LABEL_1647 = 'component_1647';
export function Component1647({ value = 1647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1647, 'data-value': derived.doubled }, children);
}
export default Component1647;
