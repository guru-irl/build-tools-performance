import React from 'react';
const LABEL_21289 = 'component_21289';
export function Component21289({ value = 21289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21289, 'data-value': derived.doubled }, children);
}
export default Component21289;
