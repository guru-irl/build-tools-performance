import React from 'react';
const LABEL_16883 = 'component_16883';
export function Component16883({ value = 16883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16883, 'data-value': derived.doubled }, children);
}
export default Component16883;
