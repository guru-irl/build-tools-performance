import React from 'react';
const LABEL_9339 = 'component_9339';
export function Component9339({ value = 9339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9339, 'data-value': derived.doubled }, children);
}
export default Component9339;
