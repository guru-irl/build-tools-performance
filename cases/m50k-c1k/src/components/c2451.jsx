import React from 'react';
const LABEL_2451 = 'component_2451';
export function Component2451({ value = 2451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2451, 'data-value': derived.doubled }, children);
}
export default Component2451;
