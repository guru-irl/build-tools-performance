import React from 'react';
const LABEL_23233 = 'component_23233';
export function Component23233({ value = 23233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23233, 'data-value': derived.doubled }, children);
}
export default Component23233;
