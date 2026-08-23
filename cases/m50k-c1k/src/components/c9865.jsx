import React from 'react';
const LABEL_9865 = 'component_9865';
export function Component9865({ value = 9865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9865, 'data-value': derived.doubled }, children);
}
export default Component9865;
