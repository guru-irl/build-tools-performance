import React from 'react';
const LABEL_9801 = 'component_9801';
export function Component9801({ value = 9801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9801, 'data-value': derived.doubled }, children);
}
export default Component9801;
