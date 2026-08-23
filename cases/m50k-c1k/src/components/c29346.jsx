import React from 'react';
const LABEL_29346 = 'component_29346';
export function Component29346({ value = 29346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29346, 'data-value': derived.doubled }, children);
}
export default Component29346;
