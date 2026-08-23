import React from 'react';
const LABEL_9404 = 'component_9404';
export function Component9404({ value = 9404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9404, 'data-value': derived.doubled }, children);
}
export default Component9404;
