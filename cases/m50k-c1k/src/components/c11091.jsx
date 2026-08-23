import React from 'react';
const LABEL_11091 = 'component_11091';
export function Component11091({ value = 11091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11091, 'data-value': derived.doubled }, children);
}
export default Component11091;
