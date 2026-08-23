import React from 'react';
const LABEL_9559 = 'component_9559';
export function Component9559({ value = 9559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9559, 'data-value': derived.doubled }, children);
}
export default Component9559;
