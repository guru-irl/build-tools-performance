import React from 'react';
const LABEL_7356 = 'component_7356';
export function Component7356({ value = 7356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7356, 'data-value': derived.doubled }, children);
}
export default Component7356;
