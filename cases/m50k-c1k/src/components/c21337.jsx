import React from 'react';
const LABEL_21337 = 'component_21337';
export function Component21337({ value = 21337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21337, 'data-value': derived.doubled }, children);
}
export default Component21337;
