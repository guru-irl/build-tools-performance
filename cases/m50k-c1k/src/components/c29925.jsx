import React from 'react';
const LABEL_29925 = 'component_29925';
export function Component29925({ value = 29925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29925, 'data-value': derived.doubled }, children);
}
export default Component29925;
