import React from 'react';
const LABEL_6201 = 'component_6201';
export function Component6201({ value = 6201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6201, 'data-value': derived.doubled }, children);
}
export default Component6201;
