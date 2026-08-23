import React from 'react';
const LABEL_33084 = 'component_33084';
export function Component33084({ value = 33084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33084, 'data-value': derived.doubled }, children);
}
export default Component33084;
