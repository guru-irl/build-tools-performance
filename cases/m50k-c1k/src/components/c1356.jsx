import React from 'react';
const LABEL_1356 = 'component_1356';
export function Component1356({ value = 1356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1356, 'data-value': derived.doubled }, children);
}
export default Component1356;
