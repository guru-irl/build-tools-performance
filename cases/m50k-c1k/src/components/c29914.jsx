import React from 'react';
const LABEL_29914 = 'component_29914';
export function Component29914({ value = 29914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29914, 'data-value': derived.doubled }, children);
}
export default Component29914;
