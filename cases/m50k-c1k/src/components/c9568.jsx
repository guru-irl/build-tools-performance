import React from 'react';
const LABEL_9568 = 'component_9568';
export function Component9568({ value = 9568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9568, 'data-value': derived.doubled }, children);
}
export default Component9568;
