import React from 'react';
const LABEL_9499 = 'component_9499';
export function Component9499({ value = 9499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9499, 'data-value': derived.doubled }, children);
}
export default Component9499;
