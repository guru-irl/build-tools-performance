import React from 'react';
const LABEL_7334 = 'component_7334';
export function Component7334({ value = 7334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7334, 'data-value': derived.doubled }, children);
}
export default Component7334;
