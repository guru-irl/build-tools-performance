import React from 'react';
const LABEL_14356 = 'component_14356';
export function Component14356({ value = 14356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14356, 'data-value': derived.doubled }, children);
}
export default Component14356;
