import React from 'react';
const LABEL_6123 = 'component_6123';
export function Component6123({ value = 6123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6123, 'data-value': derived.doubled }, children);
}
export default Component6123;
