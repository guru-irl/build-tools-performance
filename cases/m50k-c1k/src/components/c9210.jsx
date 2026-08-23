import React from 'react';
const LABEL_9210 = 'component_9210';
export function Component9210({ value = 9210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9210, 'data-value': derived.doubled }, children);
}
export default Component9210;
