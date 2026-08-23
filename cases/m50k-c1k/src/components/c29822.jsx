import React from 'react';
const LABEL_29822 = 'component_29822';
export function Component29822({ value = 29822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29822, 'data-value': derived.doubled }, children);
}
export default Component29822;
