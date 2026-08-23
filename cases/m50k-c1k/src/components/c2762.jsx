import React from 'react';
const LABEL_2762 = 'component_2762';
export function Component2762({ value = 2762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2762, 'data-value': derived.doubled }, children);
}
export default Component2762;
