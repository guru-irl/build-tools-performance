import React from 'react';
const LABEL_26592 = 'component_26592';
export function Component26592({ value = 26592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26592, 'data-value': derived.doubled }, children);
}
export default Component26592;
