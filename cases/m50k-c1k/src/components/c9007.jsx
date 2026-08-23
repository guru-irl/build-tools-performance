import React from 'react';
const LABEL_9007 = 'component_9007';
export function Component9007({ value = 9007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9007, 'data-value': derived.doubled }, children);
}
export default Component9007;
