import React from 'react';
const LABEL_2127 = 'component_2127';
export function Component2127({ value = 2127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2127, 'data-value': derived.doubled }, children);
}
export default Component2127;
