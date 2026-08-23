import React from 'react';
const LABEL_7091 = 'component_7091';
export function Component7091({ value = 7091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7091, 'data-value': derived.doubled }, children);
}
export default Component7091;
