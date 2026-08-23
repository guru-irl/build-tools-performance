import React from 'react';
const LABEL_8439 = 'component_8439';
export function Component8439({ value = 8439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8439, 'data-value': derived.doubled }, children);
}
export default Component8439;
