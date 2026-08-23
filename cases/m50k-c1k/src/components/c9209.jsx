import React from 'react';
const LABEL_9209 = 'component_9209';
export function Component9209({ value = 9209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9209, 'data-value': derived.doubled }, children);
}
export default Component9209;
