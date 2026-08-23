import React from 'react';
const LABEL_29356 = 'component_29356';
export function Component29356({ value = 29356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29356, 'data-value': derived.doubled }, children);
}
export default Component29356;
