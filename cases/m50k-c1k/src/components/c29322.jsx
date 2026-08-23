import React from 'react';
const LABEL_29322 = 'component_29322';
export function Component29322({ value = 29322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29322, 'data-value': derived.doubled }, children);
}
export default Component29322;
