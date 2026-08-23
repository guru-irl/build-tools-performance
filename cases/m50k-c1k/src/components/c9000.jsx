import React from 'react';
const LABEL_9000 = 'component_9000';
export function Component9000({ value = 9000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9000, 'data-value': derived.doubled }, children);
}
export default Component9000;
