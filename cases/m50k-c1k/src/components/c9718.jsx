import React from 'react';
const LABEL_9718 = 'component_9718';
export function Component9718({ value = 9718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9718, 'data-value': derived.doubled }, children);
}
export default Component9718;
