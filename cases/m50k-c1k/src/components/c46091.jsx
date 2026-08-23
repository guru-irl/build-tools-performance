import React from 'react';
const LABEL_46091 = 'component_46091';
export function Component46091({ value = 46091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46091, 'data-value': derived.doubled }, children);
}
export default Component46091;
