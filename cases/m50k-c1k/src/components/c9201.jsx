import React from 'react';
const LABEL_9201 = 'component_9201';
export function Component9201({ value = 9201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9201, 'data-value': derived.doubled }, children);
}
export default Component9201;
