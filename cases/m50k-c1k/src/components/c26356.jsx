import React from 'react';
const LABEL_26356 = 'component_26356';
export function Component26356({ value = 26356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26356, 'data-value': derived.doubled }, children);
}
export default Component26356;
