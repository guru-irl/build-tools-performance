import React from 'react';
const LABEL_14147 = 'component_14147';
export function Component14147({ value = 14147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14147, 'data-value': derived.doubled }, children);
}
export default Component14147;
