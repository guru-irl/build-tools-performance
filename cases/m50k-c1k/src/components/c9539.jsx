import React from 'react';
const LABEL_9539 = 'component_9539';
export function Component9539({ value = 9539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9539, 'data-value': derived.doubled }, children);
}
export default Component9539;
