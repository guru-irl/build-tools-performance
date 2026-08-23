import React from 'react';
const LABEL_3356 = 'component_3356';
export function Component3356({ value = 3356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3356, 'data-value': derived.doubled }, children);
}
export default Component3356;
