import React from 'react';
const LABEL_8732 = 'component_8732';
export function Component8732({ value = 8732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8732, 'data-value': derived.doubled }, children);
}
export default Component8732;
