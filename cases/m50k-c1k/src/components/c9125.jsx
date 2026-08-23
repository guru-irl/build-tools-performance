import React from 'react';
const LABEL_9125 = 'component_9125';
export function Component9125({ value = 9125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9125, 'data-value': derived.doubled }, children);
}
export default Component9125;
