import React from 'react';
const LABEL_9664 = 'component_9664';
export function Component9664({ value = 9664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9664, 'data-value': derived.doubled }, children);
}
export default Component9664;
