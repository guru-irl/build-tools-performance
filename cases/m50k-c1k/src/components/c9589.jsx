import React from 'react';
const LABEL_9589 = 'component_9589';
export function Component9589({ value = 9589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9589, 'data-value': derived.doubled }, children);
}
export default Component9589;
