import React from 'react';
const LABEL_9948 = 'component_9948';
export function Component9948({ value = 9948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9948, 'data-value': derived.doubled }, children);
}
export default Component9948;
