import React from 'react';
const LABEL_21650 = 'component_21650';
export function Component21650({ value = 21650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21650, 'data-value': derived.doubled }, children);
}
export default Component21650;
