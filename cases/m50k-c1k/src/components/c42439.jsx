import React from 'react';
const LABEL_42439 = 'component_42439';
export function Component42439({ value = 42439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42439, 'data-value': derived.doubled }, children);
}
export default Component42439;
