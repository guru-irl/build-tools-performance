import React from 'react';
const LABEL_9010 = 'component_9010';
export function Component9010({ value = 9010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9010, 'data-value': derived.doubled }, children);
}
export default Component9010;
