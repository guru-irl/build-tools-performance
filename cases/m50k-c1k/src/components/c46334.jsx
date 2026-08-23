import React from 'react';
const LABEL_46334 = 'component_46334';
export function Component46334({ value = 46334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46334, 'data-value': derived.doubled }, children);
}
export default Component46334;
