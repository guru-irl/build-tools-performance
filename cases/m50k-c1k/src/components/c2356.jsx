import React from 'react';
const LABEL_2356 = 'component_2356';
export function Component2356({ value = 2356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2356, 'data-value': derived.doubled }, children);
}
export default Component2356;
