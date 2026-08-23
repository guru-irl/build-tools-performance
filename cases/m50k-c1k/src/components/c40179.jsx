import React from 'react';
const LABEL_40179 = 'component_40179';
export function Component40179({ value = 40179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40179, 'data-value': derived.doubled }, children);
}
export default Component40179;
