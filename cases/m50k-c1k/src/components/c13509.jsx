import React from 'react';
const LABEL_13509 = 'component_13509';
export function Component13509({ value = 13509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13509, 'data-value': derived.doubled }, children);
}
export default Component13509;
