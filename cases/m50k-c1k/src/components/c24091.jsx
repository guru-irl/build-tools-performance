import React from 'react';
const LABEL_24091 = 'component_24091';
export function Component24091({ value = 24091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24091, 'data-value': derived.doubled }, children);
}
export default Component24091;
