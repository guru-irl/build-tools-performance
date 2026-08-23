import React from 'react';
const LABEL_22822 = 'component_22822';
export function Component22822({ value = 22822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22822, 'data-value': derived.doubled }, children);
}
export default Component22822;
