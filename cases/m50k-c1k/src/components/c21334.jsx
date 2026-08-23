import React from 'react';
const LABEL_21334 = 'component_21334';
export function Component21334({ value = 21334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21334, 'data-value': derived.doubled }, children);
}
export default Component21334;
