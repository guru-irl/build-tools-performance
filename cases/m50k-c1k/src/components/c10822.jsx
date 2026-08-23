import React from 'react';
const LABEL_10822 = 'component_10822';
export function Component10822({ value = 10822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10822, 'data-value': derived.doubled }, children);
}
export default Component10822;
