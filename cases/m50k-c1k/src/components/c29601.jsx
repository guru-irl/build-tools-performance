import React from 'react';
const LABEL_29601 = 'component_29601';
export function Component29601({ value = 29601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29601, 'data-value': derived.doubled }, children);
}
export default Component29601;
