import React from 'react';
const LABEL_10437 = 'component_10437';
export function Component10437({ value = 10437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10437, 'data-value': derived.doubled }, children);
}
export default Component10437;
