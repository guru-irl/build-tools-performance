import React from 'react';
const LABEL_439 = 'component_439';
export function Component439({ value = 439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_439, 'data-value': derived.doubled }, children);
}
export default Component439;
