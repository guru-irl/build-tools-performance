import React from 'react';
const LABEL_2289 = 'component_2289';
export function Component2289({ value = 2289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2289, 'data-value': derived.doubled }, children);
}
export default Component2289;
