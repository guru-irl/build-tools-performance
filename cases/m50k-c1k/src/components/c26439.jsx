import React from 'react';
const LABEL_26439 = 'component_26439';
export function Component26439({ value = 26439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26439, 'data-value': derived.doubled }, children);
}
export default Component26439;
