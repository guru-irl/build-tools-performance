import React from 'react';
const LABEL_6712 = 'component_6712';
export function Component6712({ value = 6712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6712, 'data-value': derived.doubled }, children);
}
export default Component6712;
