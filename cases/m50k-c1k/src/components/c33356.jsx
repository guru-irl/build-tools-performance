import React from 'react';
const LABEL_33356 = 'component_33356';
export function Component33356({ value = 33356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33356, 'data-value': derived.doubled }, children);
}
export default Component33356;
