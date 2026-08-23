import React from 'react';
const LABEL_14439 = 'component_14439';
export function Component14439({ value = 14439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14439, 'data-value': derived.doubled }, children);
}
export default Component14439;
