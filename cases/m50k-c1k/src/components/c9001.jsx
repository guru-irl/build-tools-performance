import React from 'react';
const LABEL_9001 = 'component_9001';
export function Component9001({ value = 9001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9001, 'data-value': derived.doubled }, children);
}
export default Component9001;
