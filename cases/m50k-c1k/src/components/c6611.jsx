import React from 'react';
const LABEL_6611 = 'component_6611';
export function Component6611({ value = 6611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6611, 'data-value': derived.doubled }, children);
}
export default Component6611;
