import React from 'react';
const LABEL_9821 = 'component_9821';
export function Component9821({ value = 9821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9821, 'data-value': derived.doubled }, children);
}
export default Component9821;
