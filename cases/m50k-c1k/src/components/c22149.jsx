import React from 'react';
const LABEL_22149 = 'component_22149';
export function Component22149({ value = 22149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22149, 'data-value': derived.doubled }, children);
}
export default Component22149;
