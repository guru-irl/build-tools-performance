import React from 'react';
const LABEL_36439 = 'component_36439';
export function Component36439({ value = 36439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36439, 'data-value': derived.doubled }, children);
}
export default Component36439;
