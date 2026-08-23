import React from 'react';
const LABEL_29439 = 'component_29439';
export function Component29439({ value = 29439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29439, 'data-value': derived.doubled }, children);
}
export default Component29439;
