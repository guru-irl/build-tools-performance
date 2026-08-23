import React from 'react';
const LABEL_1439 = 'component_1439';
export function Component1439({ value = 1439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1439, 'data-value': derived.doubled }, children);
}
export default Component1439;
