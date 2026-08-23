import React from 'react';
const LABEL_41439 = 'component_41439';
export function Component41439({ value = 41439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41439, 'data-value': derived.doubled }, children);
}
export default Component41439;
