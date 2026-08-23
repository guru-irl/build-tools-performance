import React from 'react';
const LABEL_6482 = 'component_6482';
export function Component6482({ value = 6482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6482, 'data-value': derived.doubled }, children);
}
export default Component6482;
