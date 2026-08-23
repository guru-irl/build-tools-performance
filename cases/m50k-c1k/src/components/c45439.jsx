import React from 'react';
const LABEL_45439 = 'component_45439';
export function Component45439({ value = 45439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45439, 'data-value': derived.doubled }, children);
}
export default Component45439;
