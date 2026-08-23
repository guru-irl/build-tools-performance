import React from 'react';
const LABEL_36201 = 'component_36201';
export function Component36201({ value = 36201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36201, 'data-value': derived.doubled }, children);
}
export default Component36201;
