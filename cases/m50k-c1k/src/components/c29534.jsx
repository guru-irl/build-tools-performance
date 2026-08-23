import React from 'react';
const LABEL_29534 = 'component_29534';
export function Component29534({ value = 29534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29534, 'data-value': derived.doubled }, children);
}
export default Component29534;
