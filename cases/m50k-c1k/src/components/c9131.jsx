import React from 'react';
const LABEL_9131 = 'component_9131';
export function Component9131({ value = 9131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9131, 'data-value': derived.doubled }, children);
}
export default Component9131;
