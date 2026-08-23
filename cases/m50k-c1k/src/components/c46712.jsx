import React from 'react';
const LABEL_46712 = 'component_46712';
export function Component46712({ value = 46712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46712, 'data-value': derived.doubled }, children);
}
export default Component46712;
