import React from 'react';
const LABEL_6334 = 'component_6334';
export function Component6334({ value = 6334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6334, 'data-value': derived.doubled }, children);
}
export default Component6334;
