import React from 'react';
const LABEL_34562 = 'component_34562';
export function Component34562({ value = 34562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34562, 'data-value': derived.doubled }, children);
}
export default Component34562;
