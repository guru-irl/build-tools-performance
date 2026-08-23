import React from 'react';
const LABEL_9359 = 'component_9359';
export function Component9359({ value = 9359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9359, 'data-value': derived.doubled }, children);
}
export default Component9359;
