import React from 'react';
const LABEL_9128 = 'component_9128';
export function Component9128({ value = 9128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9128, 'data-value': derived.doubled }, children);
}
export default Component9128;
