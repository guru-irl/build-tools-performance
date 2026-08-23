import React from 'react';
const LABEL_31439 = 'component_31439';
export function Component31439({ value = 31439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31439, 'data-value': derived.doubled }, children);
}
export default Component31439;
