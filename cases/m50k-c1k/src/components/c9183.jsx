import React from 'react';
const LABEL_9183 = 'component_9183';
export function Component9183({ value = 9183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9183, 'data-value': derived.doubled }, children);
}
export default Component9183;
