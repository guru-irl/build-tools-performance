import React from 'react';
const LABEL_9890 = 'component_9890';
export function Component9890({ value = 9890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9890, 'data-value': derived.doubled }, children);
}
export default Component9890;
