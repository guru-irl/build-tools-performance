import React from 'react';
const LABEL_9842 = 'component_9842';
export function Component9842({ value = 9842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9842, 'data-value': derived.doubled }, children);
}
export default Component9842;
