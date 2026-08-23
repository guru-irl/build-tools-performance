import React from 'react';
const LABEL_43091 = 'component_43091';
export function Component43091({ value = 43091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43091, 'data-value': derived.doubled }, children);
}
export default Component43091;
