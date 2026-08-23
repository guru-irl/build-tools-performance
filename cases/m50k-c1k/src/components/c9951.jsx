import React from 'react';
const LABEL_9951 = 'component_9951';
export function Component9951({ value = 9951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9951, 'data-value': derived.doubled }, children);
}
export default Component9951;
