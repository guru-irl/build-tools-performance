import React from 'react';
const LABEL_33424 = 'component_33424';
export function Component33424({ value = 33424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33424, 'data-value': derived.doubled }, children);
}
export default Component33424;
