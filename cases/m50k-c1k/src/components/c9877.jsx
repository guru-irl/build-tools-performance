import React from 'react';
const LABEL_9877 = 'component_9877';
export function Component9877({ value = 9877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9877, 'data-value': derived.doubled }, children);
}
export default Component9877;
