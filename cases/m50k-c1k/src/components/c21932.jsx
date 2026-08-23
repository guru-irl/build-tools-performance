import React from 'react';
const LABEL_21932 = 'component_21932';
export function Component21932({ value = 21932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21932, 'data-value': derived.doubled }, children);
}
export default Component21932;
