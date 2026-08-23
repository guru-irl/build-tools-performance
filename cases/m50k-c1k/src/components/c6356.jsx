import React from 'react';
const LABEL_6356 = 'component_6356';
export function Component6356({ value = 6356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6356, 'data-value': derived.doubled }, children);
}
export default Component6356;
