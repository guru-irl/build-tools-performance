import React from 'react';
const LABEL_22439 = 'component_22439';
export function Component22439({ value = 22439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22439, 'data-value': derived.doubled }, children);
}
export default Component22439;
