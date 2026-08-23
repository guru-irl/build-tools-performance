import React from 'react';
const LABEL_9998 = 'component_9998';
export function Component9998({ value = 9998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9998, 'data-value': derived.doubled }, children);
}
export default Component9998;
