import React from 'react';
const LABEL_10091 = 'component_10091';
export function Component10091({ value = 10091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10091, 'data-value': derived.doubled }, children);
}
export default Component10091;
