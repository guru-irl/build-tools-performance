import React from 'react';
const LABEL_9178 = 'component_9178';
export function Component9178({ value = 9178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9178, 'data-value': derived.doubled }, children);
}
export default Component9178;
