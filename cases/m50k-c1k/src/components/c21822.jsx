import React from 'react';
const LABEL_21822 = 'component_21822';
export function Component21822({ value = 21822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21822, 'data-value': derived.doubled }, children);
}
export default Component21822;
