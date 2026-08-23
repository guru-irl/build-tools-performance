import React from 'react';
const LABEL_9252 = 'component_9252';
export function Component9252({ value = 9252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9252, 'data-value': derived.doubled }, children);
}
export default Component9252;
