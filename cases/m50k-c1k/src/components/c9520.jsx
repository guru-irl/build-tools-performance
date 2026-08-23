import React from 'react';
const LABEL_9520 = 'component_9520';
export function Component9520({ value = 9520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9520, 'data-value': derived.doubled }, children);
}
export default Component9520;
