import React from 'react';
const LABEL_9121 = 'component_9121';
export function Component9121({ value = 9121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9121, 'data-value': derived.doubled }, children);
}
export default Component9121;
