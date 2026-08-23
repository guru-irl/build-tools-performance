import React from 'react';
const LABEL_1379 = 'component_1379';
export function Component1379({ value = 1379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1379, 'data-value': derived.doubled }, children);
}
export default Component1379;
