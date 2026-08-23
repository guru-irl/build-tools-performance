import React from 'react';
const LABEL_44439 = 'component_44439';
export function Component44439({ value = 44439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44439, 'data-value': derived.doubled }, children);
}
export default Component44439;
