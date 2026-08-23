import React from 'react';
const LABEL_6521 = 'component_6521';
export function Component6521({ value = 6521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6521, 'data-value': derived.doubled }, children);
}
export default Component6521;
