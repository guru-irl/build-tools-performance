import React from 'react';
const LABEL_29791 = 'component_29791';
export function Component29791({ value = 29791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29791, 'data-value': derived.doubled }, children);
}
export default Component29791;
