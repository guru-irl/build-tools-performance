import React from 'react';
const LABEL_29165 = 'component_29165';
export function Component29165({ value = 29165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29165, 'data-value': derived.doubled }, children);
}
export default Component29165;
