import React from 'react';
const LABEL_42459 = 'component_42459';
export function Component42459({ value = 42459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42459, 'data-value': derived.doubled }, children);
}
export default Component42459;
