import React from 'react';
const LABEL_29348 = 'component_29348';
export function Component29348({ value = 29348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29348, 'data-value': derived.doubled }, children);
}
export default Component29348;
