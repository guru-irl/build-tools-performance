import React from 'react';
const LABEL_33822 = 'component_33822';
export function Component33822({ value = 33822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33822, 'data-value': derived.doubled }, children);
}
export default Component33822;
