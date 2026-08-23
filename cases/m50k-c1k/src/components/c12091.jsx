import React from 'react';
const LABEL_12091 = 'component_12091';
export function Component12091({ value = 12091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12091, 'data-value': derived.doubled }, children);
}
export default Component12091;
