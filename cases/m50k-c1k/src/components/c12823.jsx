import React from 'react';
const LABEL_12823 = 'component_12823';
export function Component12823({ value = 12823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12823, 'data-value': derived.doubled }, children);
}
export default Component12823;
