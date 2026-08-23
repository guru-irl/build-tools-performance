import React from 'react';
const LABEL_9415 = 'component_9415';
export function Component9415({ value = 9415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9415, 'data-value': derived.doubled }, children);
}
export default Component9415;
