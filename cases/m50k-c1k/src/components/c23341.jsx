import React from 'react';
const LABEL_23341 = 'component_23341';
export function Component23341({ value = 23341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23341, 'data-value': derived.doubled }, children);
}
export default Component23341;
