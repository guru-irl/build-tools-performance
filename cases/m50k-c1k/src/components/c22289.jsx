import React from 'react';
const LABEL_22289 = 'component_22289';
export function Component22289({ value = 22289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22289, 'data-value': derived.doubled }, children);
}
export default Component22289;
