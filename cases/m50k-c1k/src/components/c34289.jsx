import React from 'react';
const LABEL_34289 = 'component_34289';
export function Component34289({ value = 34289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34289, 'data-value': derived.doubled }, children);
}
export default Component34289;
