import React from 'react';
const LABEL_9114 = 'component_9114';
export function Component9114({ value = 9114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9114, 'data-value': derived.doubled }, children);
}
export default Component9114;
