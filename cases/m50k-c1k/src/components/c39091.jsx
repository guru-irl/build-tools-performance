import React from 'react';
const LABEL_39091 = 'component_39091';
export function Component39091({ value = 39091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39091, 'data-value': derived.doubled }, children);
}
export default Component39091;
