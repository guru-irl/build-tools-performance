import React from 'react';
const LABEL_29162 = 'component_29162';
export function Component29162({ value = 29162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29162, 'data-value': derived.doubled }, children);
}
export default Component29162;
