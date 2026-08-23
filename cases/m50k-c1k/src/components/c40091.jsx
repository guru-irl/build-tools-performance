import React from 'react';
const LABEL_40091 = 'component_40091';
export function Component40091({ value = 40091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40091, 'data-value': derived.doubled }, children);
}
export default Component40091;
