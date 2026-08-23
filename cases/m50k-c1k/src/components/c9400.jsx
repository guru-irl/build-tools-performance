import React from 'react';
const LABEL_9400 = 'component_9400';
export function Component9400({ value = 9400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9400, 'data-value': derived.doubled }, children);
}
export default Component9400;
