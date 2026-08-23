import React from 'react';
const LABEL_9527 = 'component_9527';
export function Component9527({ value = 9527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9527, 'data-value': derived.doubled }, children);
}
export default Component9527;
