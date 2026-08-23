import React from 'react';
const LABEL_8822 = 'component_8822';
export function Component8822({ value = 8822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8822, 'data-value': derived.doubled }, children);
}
export default Component8822;
