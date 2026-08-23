import React from 'react';
const LABEL_9263 = 'component_9263';
export function Component9263({ value = 9263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9263, 'data-value': derived.doubled }, children);
}
export default Component9263;
