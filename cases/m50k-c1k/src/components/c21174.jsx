import React from 'react';
const LABEL_21174 = 'component_21174';
export function Component21174({ value = 21174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21174, 'data-value': derived.doubled }, children);
}
export default Component21174;
