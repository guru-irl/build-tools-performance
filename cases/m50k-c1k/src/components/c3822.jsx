import React from 'react';
const LABEL_3822 = 'component_3822';
export function Component3822({ value = 3822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3822, 'data-value': derived.doubled }, children);
}
export default Component3822;
