import React from 'react';
const LABEL_21338 = 'component_21338';
export function Component21338({ value = 21338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21338, 'data-value': derived.doubled }, children);
}
export default Component21338;
