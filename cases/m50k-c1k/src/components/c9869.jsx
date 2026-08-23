import React from 'react';
const LABEL_9869 = 'component_9869';
export function Component9869({ value = 9869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9869, 'data-value': derived.doubled }, children);
}
export default Component9869;
