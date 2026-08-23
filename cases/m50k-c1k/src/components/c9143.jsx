import React from 'react';
const LABEL_9143 = 'component_9143';
export function Component9143({ value = 9143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9143, 'data-value': derived.doubled }, children);
}
export default Component9143;
