import React from 'react';
const LABEL_9816 = 'component_9816';
export function Component9816({ value = 9816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9816, 'data-value': derived.doubled }, children);
}
export default Component9816;
