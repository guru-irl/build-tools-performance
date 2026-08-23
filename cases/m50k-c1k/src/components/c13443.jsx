import React from 'react';
const LABEL_13443 = 'component_13443';
export function Component13443({ value = 13443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13443, 'data-value': derived.doubled }, children);
}
export default Component13443;
