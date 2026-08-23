import React from 'react';
const LABEL_9345 = 'component_9345';
export function Component9345({ value = 9345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9345, 'data-value': derived.doubled }, children);
}
export default Component9345;
