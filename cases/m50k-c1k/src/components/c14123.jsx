import React from 'react';
const LABEL_14123 = 'component_14123';
export function Component14123({ value = 14123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14123, 'data-value': derived.doubled }, children);
}
export default Component14123;
