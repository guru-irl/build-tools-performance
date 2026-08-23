import React from 'react';
const LABEL_21486 = 'component_21486';
export function Component21486({ value = 21486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21486, 'data-value': derived.doubled }, children);
}
export default Component21486;
