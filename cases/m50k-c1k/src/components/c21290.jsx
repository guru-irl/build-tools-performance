import React from 'react';
const LABEL_21290 = 'component_21290';
export function Component21290({ value = 21290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21290, 'data-value': derived.doubled }, children);
}
export default Component21290;
