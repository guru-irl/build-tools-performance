import React from 'react';
const LABEL_21833 = 'component_21833';
export function Component21833({ value = 21833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21833, 'data-value': derived.doubled }, children);
}
export default Component21833;
