import React from 'react';
const LABEL_10439 = 'component_10439';
export function Component10439({ value = 10439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10439, 'data-value': derived.doubled }, children);
}
export default Component10439;
