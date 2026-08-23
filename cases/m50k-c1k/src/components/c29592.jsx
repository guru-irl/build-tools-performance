import React from 'react';
const LABEL_29592 = 'component_29592';
export function Component29592({ value = 29592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29592, 'data-value': derived.doubled }, children);
}
export default Component29592;
