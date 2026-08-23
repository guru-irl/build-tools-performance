import React from 'react';
const LABEL_20822 = 'component_20822';
export function Component20822({ value = 20822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20822, 'data-value': derived.doubled }, children);
}
export default Component20822;
