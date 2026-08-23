import React from 'react';
const LABEL_21712 = 'component_21712';
export function Component21712({ value = 21712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21712, 'data-value': derived.doubled }, children);
}
export default Component21712;
