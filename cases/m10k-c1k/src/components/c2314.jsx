import React from 'react';
const LABEL_2314 = 'component_2314';
export function Component2314({ value = 2314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2314, 'data-value': derived.doubled }, children);
}
export default Component2314;
