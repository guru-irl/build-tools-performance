import React from 'react';
const LABEL_22154 = 'component_22154';
export function Component22154({ value = 22154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22154, 'data-value': derived.doubled }, children);
}
export default Component22154;
