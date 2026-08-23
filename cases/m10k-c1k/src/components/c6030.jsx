import React from 'react';
const LABEL_6030 = 'component_6030';
export function Component6030({ value = 6030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6030, 'data-value': derived.doubled }, children);
}
export default Component6030;
