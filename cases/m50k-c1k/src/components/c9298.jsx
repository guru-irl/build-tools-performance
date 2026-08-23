import React from 'react';
const LABEL_9298 = 'component_9298';
export function Component9298({ value = 9298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9298, 'data-value': derived.doubled }, children);
}
export default Component9298;
