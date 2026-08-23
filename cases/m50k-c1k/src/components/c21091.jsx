import React from 'react';
const LABEL_21091 = 'component_21091';
export function Component21091({ value = 21091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21091, 'data-value': derived.doubled }, children);
}
export default Component21091;
