import React from 'react';
const LABEL_34216 = 'component_34216';
export function Component34216({ value = 34216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34216, 'data-value': derived.doubled }, children);
}
export default Component34216;
