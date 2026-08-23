import React from 'react';
const LABEL_9722 = 'component_9722';
export function Component9722({ value = 9722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9722, 'data-value': derived.doubled }, children);
}
export default Component9722;
