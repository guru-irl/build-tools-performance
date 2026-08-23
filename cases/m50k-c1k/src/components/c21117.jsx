import React from 'react';
const LABEL_21117 = 'component_21117';
export function Component21117({ value = 21117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21117, 'data-value': derived.doubled }, children);
}
export default Component21117;
