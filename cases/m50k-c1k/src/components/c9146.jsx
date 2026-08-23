import React from 'react';
const LABEL_9146 = 'component_9146';
export function Component9146({ value = 9146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9146, 'data-value': derived.doubled }, children);
}
export default Component9146;
