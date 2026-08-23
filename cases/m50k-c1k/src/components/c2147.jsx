import React from 'react';
const LABEL_2147 = 'component_2147';
export function Component2147({ value = 2147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2147, 'data-value': derived.doubled }, children);
}
export default Component2147;
