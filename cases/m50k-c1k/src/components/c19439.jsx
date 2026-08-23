import React from 'react';
const LABEL_19439 = 'component_19439';
export function Component19439({ value = 19439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19439, 'data-value': derived.doubled }, children);
}
export default Component19439;
