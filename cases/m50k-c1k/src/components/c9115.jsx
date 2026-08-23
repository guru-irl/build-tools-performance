import React from 'react';
const LABEL_9115 = 'component_9115';
export function Component9115({ value = 9115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9115, 'data-value': derived.doubled }, children);
}
export default Component9115;
