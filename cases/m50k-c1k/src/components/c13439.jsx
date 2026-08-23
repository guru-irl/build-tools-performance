import React from 'react';
const LABEL_13439 = 'component_13439';
export function Component13439({ value = 13439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13439, 'data-value': derived.doubled }, children);
}
export default Component13439;
