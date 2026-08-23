import React from 'react';
const LABEL_6084 = 'component_6084';
export function Component6084({ value = 6084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6084, 'data-value': derived.doubled }, children);
}
export default Component6084;
