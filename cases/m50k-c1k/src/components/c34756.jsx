import React from 'react';
const LABEL_34756 = 'component_34756';
export function Component34756({ value = 34756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34756, 'data-value': derived.doubled }, children);
}
export default Component34756;
