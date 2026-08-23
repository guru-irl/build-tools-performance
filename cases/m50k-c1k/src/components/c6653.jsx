import React from 'react';
const LABEL_6653 = 'component_6653';
export function Component6653({ value = 6653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6653, 'data-value': derived.doubled }, children);
}
export default Component6653;
