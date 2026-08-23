import React from 'react';
const LABEL_2091 = 'component_2091';
export function Component2091({ value = 2091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2091, 'data-value': derived.doubled }, children);
}
export default Component2091;
