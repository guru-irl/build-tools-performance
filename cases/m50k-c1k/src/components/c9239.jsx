import React from 'react';
const LABEL_9239 = 'component_9239';
export function Component9239({ value = 9239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9239, 'data-value': derived.doubled }, children);
}
export default Component9239;
