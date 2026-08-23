import React from 'react';
const LABEL_21070 = 'component_21070';
export function Component21070({ value = 21070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21070, 'data-value': derived.doubled }, children);
}
export default Component21070;
