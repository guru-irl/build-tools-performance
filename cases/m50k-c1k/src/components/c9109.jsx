import React from 'react';
const LABEL_9109 = 'component_9109';
export function Component9109({ value = 9109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9109, 'data-value': derived.doubled }, children);
}
export default Component9109;
