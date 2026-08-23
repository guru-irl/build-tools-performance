import React from 'react';
const LABEL_13091 = 'component_13091';
export function Component13091({ value = 13091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13091, 'data-value': derived.doubled }, children);
}
export default Component13091;
