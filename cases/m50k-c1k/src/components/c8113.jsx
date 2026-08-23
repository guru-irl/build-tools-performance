import React from 'react';
const LABEL_8113 = 'component_8113';
export function Component8113({ value = 8113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8113, 'data-value': derived.doubled }, children);
}
export default Component8113;
