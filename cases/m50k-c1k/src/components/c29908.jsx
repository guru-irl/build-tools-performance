import React from 'react';
const LABEL_29908 = 'component_29908';
export function Component29908({ value = 29908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29908, 'data-value': derived.doubled }, children);
}
export default Component29908;
