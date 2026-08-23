import React from 'react';
const LABEL_9588 = 'component_9588';
export function Component9588({ value = 9588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9588, 'data-value': derived.doubled }, children);
}
export default Component9588;
