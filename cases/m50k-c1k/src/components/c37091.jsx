import React from 'react';
const LABEL_37091 = 'component_37091';
export function Component37091({ value = 37091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37091, 'data-value': derived.doubled }, children);
}
export default Component37091;
