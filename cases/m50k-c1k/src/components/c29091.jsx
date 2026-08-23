import React from 'react';
const LABEL_29091 = 'component_29091';
export function Component29091({ value = 29091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29091, 'data-value': derived.doubled }, children);
}
export default Component29091;
