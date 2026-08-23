import React from 'react';
const LABEL_23888 = 'component_23888';
export function Component23888({ value = 23888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23888, 'data-value': derived.doubled }, children);
}
export default Component23888;
