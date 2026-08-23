import React from 'react';
const LABEL_9407 = 'component_9407';
export function Component9407({ value = 9407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9407, 'data-value': derived.doubled }, children);
}
export default Component9407;
