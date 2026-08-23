import React from 'react';
const LABEL_23111 = 'component_23111';
export function Component23111({ value = 23111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23111, 'data-value': derived.doubled }, children);
}
export default Component23111;
