import React from 'react';
const LABEL_2474 = 'component_2474';
export function Component2474({ value = 2474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2474, 'data-value': derived.doubled }, children);
}
export default Component2474;
