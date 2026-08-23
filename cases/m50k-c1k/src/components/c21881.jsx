import React from 'react';
const LABEL_21881 = 'component_21881';
export function Component21881({ value = 21881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21881, 'data-value': derived.doubled }, children);
}
export default Component21881;
