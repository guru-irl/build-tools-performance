import React from 'react';
const LABEL_6091 = 'component_6091';
export function Component6091({ value = 6091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6091, 'data-value': derived.doubled }, children);
}
export default Component6091;
