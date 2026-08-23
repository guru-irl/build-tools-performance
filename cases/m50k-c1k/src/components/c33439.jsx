import React from 'react';
const LABEL_33439 = 'component_33439';
export function Component33439({ value = 33439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33439, 'data-value': derived.doubled }, children);
}
export default Component33439;
