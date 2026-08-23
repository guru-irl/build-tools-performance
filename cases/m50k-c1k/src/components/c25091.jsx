import React from 'react';
const LABEL_25091 = 'component_25091';
export function Component25091({ value = 25091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25091, 'data-value': derived.doubled }, children);
}
export default Component25091;
