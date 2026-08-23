import React from 'react';
const LABEL_5149 = 'component_5149';
export function Component5149({ value = 5149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5149, 'data-value': derived.doubled }, children);
}
export default Component5149;
