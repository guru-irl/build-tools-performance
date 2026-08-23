import React from 'react';
const LABEL_18439 = 'component_18439';
export function Component18439({ value = 18439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18439, 'data-value': derived.doubled }, children);
}
export default Component18439;
