import React from 'react';
const LABEL_6131 = 'component_6131';
export function Component6131({ value = 6131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6131, 'data-value': derived.doubled }, children);
}
export default Component6131;
