import React from 'react';
const LABEL_9794 = 'component_9794';
export function Component9794({ value = 9794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9794, 'data-value': derived.doubled }, children);
}
export default Component9794;
