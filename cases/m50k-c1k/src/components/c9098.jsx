import React from 'react';
const LABEL_9098 = 'component_9098';
export function Component9098({ value = 9098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9098, 'data-value': derived.doubled }, children);
}
export default Component9098;
