import React from 'react';
const LABEL_32439 = 'component_32439';
export function Component32439({ value = 32439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32439, 'data-value': derived.doubled }, children);
}
export default Component32439;
