import React from 'react';
const LABEL_9216 = 'component_9216';
export function Component9216({ value = 9216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9216, 'data-value': derived.doubled }, children);
}
export default Component9216;
