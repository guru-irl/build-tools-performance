import React from 'react';
const LABEL_9697 = 'component_9697';
export function Component9697({ value = 9697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9697, 'data-value': derived.doubled }, children);
}
export default Component9697;
