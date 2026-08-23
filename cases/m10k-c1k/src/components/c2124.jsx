import React from 'react';
const LABEL_2124 = 'component_2124';
export function Component2124({ value = 2124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2124, 'data-value': derived.doubled }, children);
}
export default Component2124;
