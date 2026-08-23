import React from 'react';
const LABEL_16439 = 'component_16439';
export function Component16439({ value = 16439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16439, 'data-value': derived.doubled }, children);
}
export default Component16439;
