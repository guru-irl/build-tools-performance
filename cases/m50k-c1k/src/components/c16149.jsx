import React from 'react';
const LABEL_16149 = 'component_16149';
export function Component16149({ value = 16149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16149, 'data-value': derived.doubled }, children);
}
export default Component16149;
