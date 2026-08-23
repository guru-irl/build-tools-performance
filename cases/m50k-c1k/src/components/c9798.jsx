import React from 'react';
const LABEL_9798 = 'component_9798';
export function Component9798({ value = 9798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9798, 'data-value': derived.doubled }, children);
}
export default Component9798;
