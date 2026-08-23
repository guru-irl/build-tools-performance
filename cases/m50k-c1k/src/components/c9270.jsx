import React from 'react';
const LABEL_9270 = 'component_9270';
export function Component9270({ value = 9270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9270, 'data-value': derived.doubled }, children);
}
export default Component9270;
