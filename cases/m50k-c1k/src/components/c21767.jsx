import React from 'react';
const LABEL_21767 = 'component_21767';
export function Component21767({ value = 21767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21767, 'data-value': derived.doubled }, children);
}
export default Component21767;
