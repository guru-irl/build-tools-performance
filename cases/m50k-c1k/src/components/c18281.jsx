import React from 'react';
const LABEL_18281 = 'component_18281';
export function Component18281({ value = 18281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18281, 'data-value': derived.doubled }, children);
}
export default Component18281;
