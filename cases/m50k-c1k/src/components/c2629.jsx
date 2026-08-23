import React from 'react';
const LABEL_2629 = 'component_2629';
export function Component2629({ value = 2629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2629, 'data-value': derived.doubled }, children);
}
export default Component2629;
