import React from 'react';
const LABEL_35091 = 'component_35091';
export function Component35091({ value = 35091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35091, 'data-value': derived.doubled }, children);
}
export default Component35091;
