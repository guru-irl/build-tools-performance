import React from 'react';
const LABEL_9179 = 'component_9179';
export function Component9179({ value = 9179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9179, 'data-value': derived.doubled }, children);
}
export default Component9179;
