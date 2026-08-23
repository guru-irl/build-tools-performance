import React from 'react';
const LABEL_6100 = 'component_6100';
export function Component6100({ value = 6100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6100, 'data-value': derived.doubled }, children);
}
export default Component6100;
