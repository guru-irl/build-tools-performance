import React from 'react';
const LABEL_18333 = 'component_18333';
export function Component18333({ value = 18333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18333, 'data-value': derived.doubled }, children);
}
export default Component18333;
