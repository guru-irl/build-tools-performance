import React from 'react';
const LABEL_38091 = 'component_38091';
export function Component38091({ value = 38091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38091, 'data-value': derived.doubled }, children);
}
export default Component38091;
