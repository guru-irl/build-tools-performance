import React from 'react';
const LABEL_9418 = 'component_9418';
export function Component9418({ value = 9418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9418, 'data-value': derived.doubled }, children);
}
export default Component9418;
