import React from 'react';
const LABEL_36356 = 'component_36356';
export function Component36356({ value = 36356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36356, 'data-value': derived.doubled }, children);
}
export default Component36356;
