import React from 'react';
const LABEL_9112 = 'component_9112';
export function Component9112({ value = 9112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9112, 'data-value': derived.doubled }, children);
}
export default Component9112;
