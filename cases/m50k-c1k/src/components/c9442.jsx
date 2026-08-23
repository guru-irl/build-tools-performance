import React from 'react';
const LABEL_9442 = 'component_9442';
export function Component9442({ value = 9442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9442, 'data-value': derived.doubled }, children);
}
export default Component9442;
