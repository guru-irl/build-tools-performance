import React from 'react';
const LABEL_9240 = 'component_9240';
export function Component9240({ value = 9240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9240, 'data-value': derived.doubled }, children);
}
export default Component9240;
