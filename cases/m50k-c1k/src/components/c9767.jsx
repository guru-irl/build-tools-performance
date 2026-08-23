import React from 'react';
const LABEL_9767 = 'component_9767';
export function Component9767({ value = 9767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9767, 'data-value': derived.doubled }, children);
}
export default Component9767;
