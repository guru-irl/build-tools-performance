import React from 'react';
const LABEL_9091 = 'component_9091';
export function Component9091({ value = 9091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9091, 'data-value': derived.doubled }, children);
}
export default Component9091;
