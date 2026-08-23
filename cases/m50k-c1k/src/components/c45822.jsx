import React from 'react';
const LABEL_45822 = 'component_45822';
export function Component45822({ value = 45822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45822, 'data-value': derived.doubled }, children);
}
export default Component45822;
