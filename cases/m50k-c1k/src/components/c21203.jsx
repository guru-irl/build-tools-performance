import React from 'react';
const LABEL_21203 = 'component_21203';
export function Component21203({ value = 21203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21203, 'data-value': derived.doubled }, children);
}
export default Component21203;
