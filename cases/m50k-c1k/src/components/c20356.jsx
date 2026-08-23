import React from 'react';
const LABEL_20356 = 'component_20356';
export function Component20356({ value = 20356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20356, 'data-value': derived.doubled }, children);
}
export default Component20356;
