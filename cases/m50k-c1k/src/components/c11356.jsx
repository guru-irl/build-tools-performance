import React from 'react';
const LABEL_11356 = 'component_11356';
export function Component11356({ value = 11356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11356, 'data-value': derived.doubled }, children);
}
export default Component11356;
