import React from 'react';
const LABEL_21074 = 'component_21074';
export function Component21074({ value = 21074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21074, 'data-value': derived.doubled }, children);
}
export default Component21074;
