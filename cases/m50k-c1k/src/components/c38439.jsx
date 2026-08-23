import React from 'react';
const LABEL_38439 = 'component_38439';
export function Component38439({ value = 38439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38439, 'data-value': derived.doubled }, children);
}
export default Component38439;
