import React from 'react';
const LABEL_21455 = 'component_21455';
export function Component21455({ value = 21455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21455, 'data-value': derived.doubled }, children);
}
export default Component21455;
