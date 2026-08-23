import React from 'react';
const LABEL_4439 = 'component_4439';
export function Component4439({ value = 4439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4439, 'data-value': derived.doubled }, children);
}
export default Component4439;
