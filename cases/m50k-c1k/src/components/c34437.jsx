import React from 'react';
const LABEL_34437 = 'component_34437';
export function Component34437({ value = 34437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34437, 'data-value': derived.doubled }, children);
}
export default Component34437;
