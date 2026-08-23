import React from 'react';
const LABEL_14091 = 'component_14091';
export function Component14091({ value = 14091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14091, 'data-value': derived.doubled }, children);
}
export default Component14091;
