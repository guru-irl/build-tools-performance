import React from 'react';
const LABEL_6568 = 'component_6568';
export function Component6568({ value = 6568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6568, 'data-value': derived.doubled }, children);
}
export default Component6568;
