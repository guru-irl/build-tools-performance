import React from 'react';
const LABEL_9053 = 'component_9053';
export function Component9053({ value = 9053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9053, 'data-value': derived.doubled }, children);
}
export default Component9053;
