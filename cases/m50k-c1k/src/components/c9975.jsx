import React from 'react';
const LABEL_9975 = 'component_9975';
export function Component9975({ value = 9975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9975, 'data-value': derived.doubled }, children);
}
export default Component9975;
