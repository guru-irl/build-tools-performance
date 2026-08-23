import React from 'react';
const LABEL_26091 = 'component_26091';
export function Component26091({ value = 26091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26091, 'data-value': derived.doubled }, children);
}
export default Component26091;
