import React from 'react';
const LABEL_30091 = 'component_30091';
export function Component30091({ value = 30091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30091, 'data-value': derived.doubled }, children);
}
export default Component30091;
