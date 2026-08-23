import React from 'react';
const LABEL_34091 = 'component_34091';
export function Component34091({ value = 34091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34091, 'data-value': derived.doubled }, children);
}
export default Component34091;
