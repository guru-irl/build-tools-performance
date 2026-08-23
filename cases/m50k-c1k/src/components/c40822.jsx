import React from 'react';
const LABEL_40822 = 'component_40822';
export function Component40822({ value = 40822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40822, 'data-value': derived.doubled }, children);
}
export default Component40822;
