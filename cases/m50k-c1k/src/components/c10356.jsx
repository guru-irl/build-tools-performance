import React from 'react';
const LABEL_10356 = 'component_10356';
export function Component10356({ value = 10356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10356, 'data-value': derived.doubled }, children);
}
export default Component10356;
